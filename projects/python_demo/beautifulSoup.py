html_doc = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="title"><b>The Dormouse's story</b></p>

<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>

<p class="story">...</p>
"""

from bs4 import BeautifulSoup
soup = BeautifulSoup(html_doc, "html.parser")
# print(soup)



# print(soup.title.name)
# print(soup.title.string)
# print(soup.title.parent.name)
# print(soup.p)
# print(soup.a)
# print(soup.p['class'])
# print(soup.find_all('a'))
# print(soup.find(id='link2'))
# print(soup.find(id='link2').string)
# #获取所有a标签链接
# for link in soup.find_all('a'):
#     print(link.get('href'))

# #获取所有文字内容
# print(soup.get_text())

#遍历文档树
print("---tagname---")
print(soup.head)
print(soup.title)
print(soup.body.b)
print(soup.a)  
print(soup.find_all('a')) 

print("\n---contents---")
head_tag = soup.head
print(head_tag.contents)
title_tag = head_tag.contents[0]
print(title_tag)
print(len(soup.contents))
print(soup.contents[1].name)

print("\n---children---")
for child in title_tag.children:
    print(child)

print("\n---descendants---")
for child in head_tag.descendants:
    print(child)

print("\n---string---")
print(title_tag.string)

print("\n---strings和stripped_strings---")
for string in soup.strings:
    print(repr(string))

print("\n---去掉空格和换行stripped_strings---")
for string in soup.stripped_strings:
    print(string)

print("\n---parent---")
