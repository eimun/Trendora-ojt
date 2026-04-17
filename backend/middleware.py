from functools import wraps
from flask import request, jsonify
import time

def rate_limiter(max_requests=30, window_seconds=60):
    """Simple in-memory rate limiter per IP"""
    requests_log = {}

    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            ip = request.remote_addr
            now = time.time()

            if ip not in requests_log:
                requests_log[ip] = []

            # Clean old entries
            requests_log[ip] = [t for t in requests_log[ip] if now - t < window_seconds]

            if len(requests_log[ip]) >= max_requests:
                return jsonify({"error": "Rate limit exceeded. Please try again later."}), 429

            requests_log[ip].append(now)
            
            # Prevent memory leak by routinely cleaning up dictionary keys for inactive IPs
            if len(requests_log[ip]) == 1:
                # Basic garbage collection: clean out fully empty IP records
                empty_ips = [k for k, v in requests_log.items() if not v or (now - v[-1] >= window_seconds)]
                for k in empty_ips:
                    if k != ip:
                        del requests_log[k]

            return f(*args, **kwargs)
        return decorated_function
    return decorator


def validate_json(*required_fields):
    """Decorator to validate required JSON fields"""
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            data = request.get_json()
            if not data:
                return jsonify({"error": "Request body must be JSON"}), 400

            missing = [field for field in required_fields if field not in data]
            if missing:
                return jsonify({"error": f"Missing required fields: {', '.join(missing)}"}), 400

            return f(*args, **kwargs)
        return decorated_function
    return decorator


def security_headers(response):
    """Add essential global security headers to response"""
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    return response
