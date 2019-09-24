import requests
try:
    headers = {
        'Referer': 'https://www.lagou.com/zhaopin/Java/?filterOption=3&sid=8ae153970ac64e2f90e5a4feb7e0f211',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
        'Host': 'www.lagou.com'
    }
    r = requests.get('https://www.lagou.com/zhaopin/webqianduan/?labelWords=label',headers = headers)
    r.raise_for_status()
    r.encoding = r.apparent_encoding
    print(r.text)
except:
    print("爬取失败")