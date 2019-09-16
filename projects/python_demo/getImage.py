import requests
import os
url = "https://images-cn.ssl-images-amazon.com/images/I/91eO%2BGJOMyL._SL150_.jpg"
root = "E://WebDevelopment//projects//python_demo//images//"
path = root + url.split('/')[-1]
try:
    if not os.path.exists(root):
        os.mkdir(root)
    if not os.path.exists(path):
        r = requests.get(url)
        with open(path,'wb') as f:
            f.write(r.content)
            f.close()
            print("文件保存成功")
    else:
        print("文件已存在")
except:
    print("爬取失败")