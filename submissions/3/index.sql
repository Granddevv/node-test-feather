select accounts.id, accounts.name, to_char(clicks.created_at, 'YYYY-MM'), count(*) AS num_clicks
from accounts
    join campaigns on accounts.id = campaigns.account_id
    join clicks on campaigns.id = clicks.campaign_id
where accounts.created_at > (now() - INTERVAL '6 MONTHS') and  campaigns.end_date > (campaigns.start_date - INTERVAL '1 WEEKS')
group by to_char(clicks.created_at, 'YYYY'), to_char(clicks.created_at, 'MM'), clicks.created_at, accounts.id
