from flask import Blueprint, jsonify, request
from auth import token_required
from virality_scorer import calculate_virality_score, batch_score_trends

virality_bp = Blueprint('virality', __name__)

@virality_bp.route('/score', methods=['POST'])
@token_required
def score_trend():
    """Score a single trend"""
    data = request.json
    trend = data.get('trend')
    
    if not trend:
        return jsonify({"error": "Trend data required"}), 400
    
    try:
        score_data = calculate_virality_score(trend)
        return jsonify(score_data)
    except Exception as e:
        print(f"Error calculating virality: {e}")
        return jsonify({"error": "Failed to calculate virality score"}), 500

@virality_bp.route('/batch-score', methods=['POST'])
@token_required
def batch_score():
    """Score multiple trends"""
    data = request.json
    trends = data.get('trends', [])
    
    try:
        scored = batch_score_trends(trends)
        return jsonify({"scored_trends": scored})
    except Exception as e:
        print(f"Error in batch scoring: {e}")
        return jsonify({"error": "Failed to score trends batch"}), 500
