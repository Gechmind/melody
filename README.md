# WHAT IS THIS
 
 Melody is a system collects concept tags a person have;

 We cant resolve any communication problem, we inspire it. Cause one concept spread more concept produce.

# HOW WE FUNCTION

Any one who describes the external world must use concepts.The more concepts we have,more expressive we will be.So the concepts will make up ourselves in a way。


# SYSTEM WORK
*  元操作
    -  概念池提取 （基础数据获取方式需要探索，wiki中的词条概念如果只通过链接是无法正确获取关系的
    -  ）
    -  创建概念 
    -  继承概念
    -  定义子概念
    -  概念演化
*  系统归集(Map Reduce)
    -  概念入池
    -  概念树
    -  概念树合并
    -  元概念分析<有完整的树>
    -  灰度计算(权重分析) <外部Star导入>
    -  概念区域分析 ——>
*   评价
    -  局部概念鉴定<拥有者确实理解么>(参与权重分析)
    -  全局概念鉴定 <概念入池计算>
    -  概念输送
*   个人概念群(D3 力导向图)
    -  概念树图形化
    -  概念鉴定灰度
    -  单独概念演化图

# DESING
*  数据结构 
    - 系统概念表
        + 系统概念树
            * 父概念 
            * 概念来源
            * 子概念集合
            * 概念使用率
            * 是否元概念
            * 概念输送率
    - 用户概念表
        + 用户概念树
            * 用户概念
                - 外部因子 (其他链接)
                - 概念名称  概念描述 概念编号   用户id  核心概念ID(限于继承)   用户概念ID(限于继承)
                - 子概念集合
                - 概念评价
                    + 评价人  评价时间  评价来源组
                - 概念输送
                    + 输送人  输送时间  输送组来源
        + 用户概念演化(单个)
            * 概念id  历史概念id   父概念id
        + 概念网络
    - 用户信息
        + 用户区域  年龄  职业  学历  专业  学校  组


