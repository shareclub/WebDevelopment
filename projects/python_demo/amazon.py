import requests
url = "https://www.amazon.cn/Kindle%E7%94%B5%E5%AD%90%E4%B9%A6/b?ie=UTF8&node=116169071&ref_=nav_topnav_giftcert"
try:
    kv = {'User-agent':'Mozilla/5.0'}
    r = requests.get(url,headers = kv)
    r.raise_for_status()
    r.encoding = r.apparent_encoding
    print(r.text[:1000])
except:
    print("爬取失败")