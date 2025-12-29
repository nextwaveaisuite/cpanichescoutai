export interface ExportData {
  keyword: string;
  score: number;
  difficulty: number;
  profit: number;
  offers: any[];
  domains: any[];
  blueprint: any;
}

export function render(data: ExportData): string {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CPA Niche Scout AI - Analysis Report</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5; color: #333; }
    .container { max-width: 900px; margin: 0 auto; padding: 20px; }
    header { background: #4f7cff; color: white; padding: 30px; border-radius: 8px; margin-bottom: 30px; }
    h1 { font-size: 2rem; margin-bottom: 10px; }
    .metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 30px; }
    .metric { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #4f7cff; }
    .metric-value { font-size: 2rem; font-weight: bold; color: #4f7cff; }
    .metric-label { color: #666; font-size: 0.9rem; margin-top: 5px; }
    .section { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .section h2 { color: #4f7cff; margin-bottom: 15px; font-size: 1.5rem; }
    .offer { padding: 10px; border-bottom: 1px solid #eee; }
    .offer:last-child { border-bottom: none; }
    footer { text-align: center; color: #999; padding: 20px; font-size: 0.9rem; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>CPA Niche Scout AI - Analysis Report</h1>
      <p>Keyword: <strong>${data.keyword}</strong></p>
      <p>Generated: ${new Date().toLocaleDateString()}</p>
    </header>

    <div class="metrics">
      <div class="metric">
        <div class="metric-value">${data.score}</div>
        <div class="metric-label">Keyword Score</div>
      </div>
      <div class="metric">
        <div class="metric-value">${data.difficulty}</div>
        <div class="metric-label">Difficulty</div>
      </div>
      <div class="metric">
        <div class="metric-value">${data.profit}</div>
        <div class="metric-label">Profit Score</div>
      </div>
      <div class="metric">
        <div class="metric-value">${data.score > 60 ? 'BUILD' : data.score > 40 ? 'MONITOR' : 'SKIP'}</div>
        <div class="metric-label">Verdict</div>
      </div>
    </div>

    <div class="section">
      <h2>CPA Offers</h2>
      ${data.offers.map(o => `
        <div class="offer">
          <strong>${o.network}</strong> - $${o.payout} payout
            
<small>${o.category}</small>
        </div>
      `).join('')}
    </div>

    <div class="section">
      <h2>Domain Suggestions</h2>
      ${data.domains.map(d => `
        <div class="offer">
          <strong>${d.domain}</strong> - $${d.price}
            
<small>Age: ${d.age} years | Score: ${d.score}</small>
        </div>
      `).join('')}
    </div>

    <div class="section">
      <h2>Website Blueprint</h2>
      <p><strong>Site Name:</strong> ${data.blueprint.siteName}</p>
      <p><strong>Pages:</strong> ${data.blueprint.pages.length}</p>
      <p><strong>Strategy:</strong> ${data.blueprint.seo.contentStrategy}</p>
    </div>

    <footer>
      <p>CPA Niche Scout AI 2.0 | Professional Niche Research Tool</p>
    </footer>
  </div>
</body>
</html>
  `;
  return html;
}
