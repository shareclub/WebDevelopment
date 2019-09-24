# -*- coding: utf-8 -*-
import scrapy


class DemoSpider(scrapy.Spider):
    name = 'demo'
    #allowed_domains = ['python123.io']
    start_urls = ['http://python123.io/ws/demo.html']
    
    #手动写start_urls，其中使用生成器
    #def start_requests(self):
    #    urls = [
    #        'http://python123.io/ws/demo.html'
    #    ]
    #    for url in urls:
    #       yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        fname = response.url.split('/')[-1]   #文件名
        with open(fname, 'wb') as f:   #保存文件
            f.write(response.body)
        self.log('Saved file %s.' %fname)
        pass
