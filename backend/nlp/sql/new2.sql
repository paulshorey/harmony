SELECT key,acronym,plural,abbreviation,best,list,list_count,ws_sentiment,sentiment,agg_sentiment,ok_list,pos_list,ok_count,sources,vrsn,properlocked,proper,pos1locked,pos1,pos2,pos3,pos4,pos5,list,list_count,sources_success FROM crawl.words 

-- WHERE lower(key)='sonar' ORDER BY list_count DESC;

WHERE timestamp IS NOT NULL AND list_count IS NOT NULL AND acronym IS NOT NULL AND acronym!='' ORDER BY timestamp DESC LIMIT 500 






-- WHERE list_count>=40 AND vrsn<4002 AND (error IS NULL OR error='') ORDER BY list_count DESC, vrsn ASC, timestamp ASC LIMIT 500
-- WHERE vrsn=4002 ORDER BY timestamp DESC LIMIT 500
-- WHERE list_count IS NOT NULL AND vrsn<4007 ORDER BY list_count DESC, timestamp DESC LIMIT 500;
-- WHERE lower(key) != key ORDER BY list_count DESC LIMIT 500;
-- WHERE timestamp IS NOT NULL AND list_count>0 ORDER BY timestamp DESC LIMIT 500;
-- WHERE vrsn>2000 AND e_sentiment IS NULL AND list_count>0 ORDER BY list_count DESC, vrsn ASC LIMIT 500;
-- WHERE error IS NOT NULL AND error!='' LIMIT 500;

-- SELECT vrsn,key,sentiment,all_sentiment,list_count,sources_count,list,pos1,pos2,plural FROM crawl.words 
-- WHERE list_count>=3 AND list_count<6 AND sources_count>=5 AND sentiment IS NULL LIMIT 500;

-- SELECT * FROM crawl.words WHERE (error='' OR error IS NULL) AND vrsn<1013 AND sources_count>=2 ORDER BY list_count DESC LIMIT 500;