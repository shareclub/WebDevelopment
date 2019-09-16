import requests

def getHTMLText(url):
    try:
        r = requests.get(url)
        r.raise_for_status  #如果返回不是200，则产生异常
        r.encoding = r.apparent_encoding
        return r.text
    except:
        "引发异常"

if __name__ == "__main__":
    url = "http://www.baidu.com"
    print(getHTMLText(url))