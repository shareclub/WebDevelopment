import requests
url = "http://www.baidu.com/s"     #360的为 http://www.so.com/s
keyword = "Python"
try:
    kv = {'wd':keyword}              #360的为'q':keyword
    r = requests.get(url,params=kv)
    print(r.request.url)
    r.raise_for_status()
    print(len(r.text))
except:
    print("爬取失败")