import sys
sys.path.append('backend')
from trends_service import fetch_trends_for_niche
from virality_scorer import calculate_virality_score

trends = fetch_trends_for_niche('tech', 'US')
for t in trends:
    score = calculate_virality_score(t)['score']
    print(f"Keyword: {t['keyword']}, Volume: {t['volume']}, Type: {type(t['volume'])}, Score: {score}")
