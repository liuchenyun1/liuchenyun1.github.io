import requests as r
res=r.get("https://www.baidu.com/s?wd=%E8%87%AA%E4%B8%BB%E6%8B%9B%E7%94%9F%E5%8F%96%E6%B6%88&rsv_spt=1&rsv_iqid=0x99fc511900313dd1&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=62095104_19_oem_dg&rsv_enter=1&rsv_dl=ib&rsv_sug3=22&rsv_sug1=14&rsv_sug7=100")
cnt=1
while res.status_code==200:
    print(cnt)
    res=r.get("https://www.baidu.com/s?wd=%E8%87%AA%E4%B8%BB%E6%8B%9B%E7%94%9F%E5%8F%96%E6%B6%88&rsv_spt=1&rsv_iqid=0x99fc511900313dd1&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=62095104_19_oem_dg&rsv_enter=1&rsv_dl=ib&rsv_sug3=22&rsv_sug1=14&rsv_sug7=100")
    cnt+=1
