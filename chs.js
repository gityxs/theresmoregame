/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Copper": "铜",
    "Discord": "Discord",
    "Donate": "Donate",
    "Enter": "进入",
    "Farming": "农业",
    "Food": "食物",
    "Gathering": "收集",
    "Iron": "铁",
    "Mining": "采矿",
    "Patreon": "Patreon",
    "Reddit": "Reddit",
    "Stone": "石头",
    "The world of Theresmore awaits": "Theresmore 的世界在等待着你",
    "Tools": "工具",
    "Twitter": "Twitter",
    "Wood": "木头",
    "You need to enable JavaScript to run this game": "您需要启用 JavaScript 才能运行此游戏",
    "Your ancestors are well known for:": "您的祖先因以下原因而闻名：",
    "Your ancestors have mastered the best farming techniques and food will never be a problem for your people": "你的祖先掌握了最好的耕作技术，食物对你的人民来说永远不会成为问题",
    "Your ancestors knew how to refine metals and they used tools of rare workmanship": "你的祖先知道如何提炼金属，他们使用稀有工艺的工具",
    "Your ancestors knew the best places to cut good wood and dig the finest stone": "你的祖先知道最好的地方来砍伐优质木材和挖掘最好的石头",
    "Battery life": "电池寿命",
    "Battery Mode": "电池模式",
    "Close": "关闭",
    "Dark / Light mode": "深色 / 浅色 模式",
    "Difficulty Impossible": "难度 - 不可能",
    "Difficulty Normal": "难度 - 正常",
    "Difficulty Difficulty Hard": "难度 - 困难",
    "Hard reset": "硬重置",
    "Import from clipboard": "从剪贴板导入",
    "Performance": "性能",
    "Save to clipboard": "保存到剪贴板",
    "Save to file": "保存到文件",
    "Support": "支持",
    "You have to play more to get statistics": "你必须玩更多才能获得统计数据",
    "You have to work on it a bit": "你必须努力一点",
    "/s": "/秒",
    "Ancestor gathering": "祖传收集",
    "Build": "建造",
    "From nomadic hunters and gatherers, our people have grown up and are ready to settle in a fertile valley. From here will arise, perhaps, the greatest nation Theresmore has known. The age of man has just begun": "从游牧的猎人和采集者，我们的人民已经长大并准备在肥沃的山谷定居。 或许，热门所知道的最伟大的国家 Theresmore 将从这里兴起。 人类的时代才刚刚开始",
    "Housing": "住房",
    "Humans": "人类",
    "It's time to construct some dwellings": "是时候建造一些住宅了",
    "Research": "研究",
    "The beginning of human era": "人类时代的开始",
    "You have nothing to build": "你没有什么可建造的",
    "Your village is empty, look for some new technology": "你的村庄是空的，寻找一些新技术",
    "A small place to live": "一个可供居住的小地方",
    "Agriculture": "农业",
    "Common House": "普通房屋",
    "Gold": "黄金",
    "Humans:": "人类：",
    "Living Quarters": "生活区",
    "Population": "人口",
    "Skilled diplomats and expert merchants, their curiosity drives them where others hesitate to venture": "熟练的外交官和专家商人，他们的好奇心驱使他们去其他人犹豫冒险的地方",
    "Stone masonry": "砌石",
    "The hard work of cultivating the land always gives its fruits": "耕种土地的辛勤工作总能结出硕果",
    "The quarry is not a place for weak arms": "采石场不是软弱武器的地方",
    "Theresmore's lush forests will help our people prosper": "Theresmore 茂密的森林将帮助我们的人民繁荣发展",
    "We can now build Common house": "我们现在可以建造公共房屋",
    "Wood cutting": "木材切割",
    "Your settlement is starving, produce food!": "你的定居点正在挨饿，生产食物！",
    "Farm": "农场",
    "Farmer": "农民",
    "Farmer food": "农民食物",
    "Food cap": "食物上限",
    "Producing and Crafting": "生产和制作",
    "Storage": "储存",
    "The peasants will feed our great nation": "农民将养活我们伟大的国家",
    "We need more and more material!": "我们需要越来越多的材料！",
    "Your settlement is starving, produce food!": "你的定居点正在挨饿，生产食物！",
    "All your progress will be lost and you'll have to start the game over from the beginning, are you sure you want to continue?": "您的所有进度都将丢失，您必须从头开始游戏，您确定要继续吗？",
    "Ancestor farming": "祖先农业",
    "Cancel": "取消",
    "Confirm": "确认",
    "If you confirm, a deletion of all game data will be performed, do you want to continue?": "如果您确认，将删除所有游戏数据，您要继续吗？",
    "This operation will delete all game data and they will no longer be recoverable, do you confirm you want to continue?": "此操作将删除所有游戏数据且无法恢复，您确定要继续吗？",
    "Archery": "射箭",
    "Army cap": "军队上限",
    "Ceramics will allow us to preserve things and will favor the birth of commerce": "陶瓷可以让我们保存东西，并有利于商业的诞生",
    "Lumberjack": "伐木工人",
    "Lumberjack Camp": "伐木工营地",
    "Lumberjack wood": "伐木工木材",
    "Pottery": "陶器",
    "Quarry": "采石场",
    "Quarryman": "采石工",
    "Quarryman stone": "采石场",
    "Stone cap": "石头上限",
    "The bow will allow us to strike from a safe distance": "弓将允许我们从安全距离进行攻击",
    "The quarry will supply the city with stone": "采石场将为城市提供石头",
    "We can now build Lumberjack camp": "我们现在可以建造伐木工人营地",
    "We can now build the Quarry": "我们现在可以建造采石场",
    "Wood cap": "木头上限",
    "Wood is the resource on which we will base our city": "木材是我们建立城市的资源",
    "Unemployed": "未分配",
    "Artisan Workshop": "工匠作坊",
    "Commercial Area": "商业区",
    "A small Village": "一个小村庄",
    "Artisan Workshop": "工匠作坊",
    "Cap Food": "食物上限",
    "Cap Wood": "木头上限",
    "Commercial Area": "商业区",
    "Crop Rotation": "轮作",
    "Maximum Food Cap": "最大食物上限",
    "Maximum Wood Cap": "最大木头上限",
    "Open achievements": "打开成就",
    "Our farmers are learning to farm better and better": "我们的农民正在学习越来越好地耕作",
    "Research points spent": "花费的研究点数",
    "The pleasure of growing grass": "种草的乐趣",
    "Unlocked": "已解锁",
    "Writing": "写作",
    "Your settlement is starting to grow": "您的定居点开始增长",
    "A resourceful warehouse": "资源丰富的仓库",
    "Breeding": "育种",
    "Copper cap": "铜上限",
    "Crop rotation is a fundamental process for keeping fields productive": "轮作是保持田间生产力的基本过程",
    "Fame": "声誉",
    "Iron cap": "铁上限",
    "Now we can build the Store": "现在我们可以建立 贮藏室",
    "Quarry stone": "采石场",
    "Store": "贮藏室",
    "Verba volant scripta manent": "文字飞扬，文字犹在",
    "We will have to breed the best horses in Theresmore": "我们必须在 Theresmore 培育出最好的马",
    "Artisan": "工匠",
    "Artisan gold": "加工黄金",
    "Artisan tools": "加工工具",
    "Gold cap": "黄金上限",
    "Tools cap": "工具上限",
    "The tools these artisans produce will be the manufacturing focus of the settlement": "这些工匠生产的工具将成为定居点的制造重点",
    "Artisan Workshop food": "工匠作坊产出食物",
    "Artisan Workshop gold": "工匠作坊产出黄金",
    "Artisan Workshop stone": "工匠作坊产出石头",
    "Artisan Workshop tools": "工匠作坊产出工具",
    "Artisan Workshop wood": "工匠作坊产出木头",
    "As we continue digging in the quarry we may find more minerals": "随着我们继续在采石场挖掘，我们可能会发现更多的矿物",
    "Crop Rotation food": "轮作食物",
    "Farm food": "农场食物",
    "Fatti non foste a viver come bruti ma per seguir virtute e canoscenza": "你不是要像野兽一样生活，而是要遵循美德和知识",
    "Knowledge Area": "知识区",
    "Lumberjack Camp wood": "伐木工人营地木材",
    "Mathematics": "数学",
    "Miner copper": "矿工采铜",
    "Miner iron": "矿工采铁",
    "Religion": "宗教",
    "Research cap": "研究上限",
    "School": "学校",
    "Two plus two is always four": "二加二总是四",
    "We can now build the School": "我们现在可以建造学校",
    "We honor the ancient gods": "我们崇敬远古诸神",
    "With the artisan's workshops we will be able to build all the tools that will help in other jobs": "通过工匠的作坊，我们将能够创建有助于其他工作的所有工具",
    "Cap Gold": "黄金上限",
    "Cap Stone": "石头上限",
    "Fame earned": "获得的声誉",
    "Maximum Gold Cap": "最大黄金上限",
    "Maximum Stone Cap": "最大石头上限",
    "Ancestor mining": "祖传采矿",
    "Mythology": "神话",
    "The myths of Theresmore tell of great gods with majestic powers": "Theresmore 的神话讲述了具有威严力量的伟大神灵",
    "Theresmore is full of dangers, and as we leave our valley we will discover that we are not alone. Enemies of all kinds are lurking and that is why we must arm ourselves and be ready to face them. In addition we can now create our own scouts who will explore Theresmore looking for anything we can exploit or conquer": "Theresmore 充满了危险，当我们离开我们的山谷时，我们会发现我们并不孤单。 各种各样的敌人都潜伏着，这就是为什么我们必须武装自己并准备好面对他们。 此外，我们现在可以创建自己的侦察兵，他们将探索 Theresmore，寻找我们可以利用或征服的任何东西",
    "Archer": "射手",
    "Archers can strike enemy troops from a safe distance and sap their morale (Ranged)": "弓箭手可以在安全距离内攻击敌军并削弱他们的士气（远程）",
    "Army": "军队",
    "Attack": "攻击",
    "Enemies": "敌人",
    "Explore": "探索",
    "Garrison": "驻军",
    "Horse": "马",
    "Light Cavalry": "轻骑兵",
    "Light cavalry, very effective against ranged units (Cavalry)": "轻骑兵，对远程单位非常有效（骑兵）",
    "Scout": "侦察兵",
    "Stable": "马厩",
    "The Army": "军队",
    "The Recon Squad is our family": "侦察小队是我们的家人",
    "You have no scout to send": "你没有侦察兵可以派出",
    "You have no soldier": "你没有士兵",
    "You have no soldier to send": "你没有士兵可以派遣",
    "You haven't conquered any enemies yet": "你还没有征服任何敌人",
    "Breeder": "饲养员",
    "Bronze working": "青铜加工",
    "Copper and iron will come in handy": "铜和铁会派上用场",
    "Cow cap": "牛上限",
    "Faith and Magic": "信仰与魔法",
    "Harvest Shrine": "丰收神殿",
    "Horse cap": "马上限",
    "In the stables you work hard and get up at dawn without ever complaining": "在马厩里，你努力工作，黎明时分起床，从不抱怨",
    "Mana": "法力",
    "Mind Shrine": "心灵神殿",
    "Mine": "矿井",
    "The Bronze Age, one of my favorite eras!": "青铜时代，我最喜欢的时代之一！",
    "The sanctuary dedicated to Wisdom will help us discover the secrets of Theresmore": "献给智慧的圣殿将帮助我们发现 Theresmore 的秘密",
    "The shrine dedicated to the God of War will help us crush our enemies": "献给战神的神殿将帮助我们粉碎我们的敌人",
    "The shrine dedicated to the Mother Earth will help us feed and grow the settlement": "献给地球母亲的神殿将帮助我们生存和发展定居点",
    "War Shrine": "战争神殿",
    "Miner": "矿工",
    "Do you know what they have awakened in the darkness of Khazzard-drum? Shadow and flames": "你知道他们在卡扎德鼓的黑暗中觉醒了什么吗？ 阴影和火焰",
    "Dismiss": "解雇",
    "Send to explore": "派出探索",
    "5 Lumberjack Camp": "5 伐木工营地",
    "Armies": "军队",
    "Scout missions started": "侦察任务开始",
    "Tree after tree": "一棵又一棵树",
    "Max cap reached": "已达最大上限",
    "Max cap": "最大上限",
    "Mine copper": "开采铜",
    "Mine iron": "开采铁",
    "Woodcarvers": "木雕师",
    "Woodcarvers will produce quality wood": "木雕师将生产优质木材",
    "Woodcarvers wood": "木雕师产出木头",
    "Send to attack": "派出进攻",
    "You have no enemy to attack": "你没有敌人可以攻击",
    "5 Quarry": "5 采石场",
    "Increasing back pain": "背痛加剧",
    "New stone extraction and processing techniques": "新的石材开采和加工技术",
    "Stone extraction tools": "石头开采工具",
    "Stone extraction tools stone": "石头开采工具的石头",
    "Click here to paste a save": "点击此处粘贴保存",
    "Import pasted text": "导入粘贴的文本",
    "Paste the save in the box below and press the import button": "将保存粘贴在下面的框中，然后按导入按钮",
    "The game has been saved to file": "游戏存档已保存到文件",
    "The game has been saved to the clipboard": "游戏存档已保存到剪贴板",
    "Army and Defense": "军队和防御",
    "Barracks": "兵营",
    "Fortification": "筑城",
    "High walls to defend our settlement": "高墙保卫我们的定居点",
    "I will serve you my master": "我会为你服务我的主人",
    "Iron is a much stronger material than bronze, its uses will be multiple": "铁是比青铜坚固得多的材料，它的用途将是多重的",
    "Iron working": "铁加工",
    "Servitude": "奴役",
    "Simple unit of the ancient era (Shock)": "远古时代的简单单位（休克）",
    "Spearman": "矛兵",
    "The cheap front line of any deployment. It has a good defense (Tank)": "任意部署的廉价前线兵种。 它有很好的防御（坦克）",
    "Warrior": "战士",
    "We can train spearmen and warriors, our army can both defend and attack effectively. Now we can build Barracks": "我们可以训练矛兵和战士，我们的军队可以有效地防御和攻击。 现在我们可以建造兵营了",
    "Citizens will feel protected with a couple of guards around": "周围有几个警卫，市民会感到受到保护",
    "Currency": "货币",
    "Everything has its price": "一切都有它的代价",
    "The glory of the west, Theresmore's most advanced kingdom. Its castles can be seen from miles away and their cities are rich and bustling. On the battlefield they use their heavy cavalry that shakes the earth and makes enemies tremble. They possess the accesses to the western sea, the only true maritime outlet for all who inhabit this continent": "西部的荣耀，Theresmore 最先进的王国。 它的城堡从数英里外都可以看到，他们的城市富饶繁华。 在战场上，他们使用重骑兵震撼大地，让敌人战栗。 他们拥有通往西海的通道，这是所有居住在这片大陆上的人的唯一真正的海上出口",
    "Diplomacy": "外交",
    "Western Kingdom": "西方王国",
    "Cow": "牛",
    "Send a delegation": "派遣代表团",
    "We send a delegation to this people to start diplomatic relations": "我们派了一个代表团到这个国家建立外交关系",
    "5 School": "5 学校",
    "Appear weak when you are strong, and strong when you are weak": "强时显弱，弱时显强",
    "The beginning of scientific thought": "科学思想的开端",
    "Warfare": "战争",
    "A growing Village": "一个成长的村庄",
    "Mathematics wood": "数学产出木头",
    "Servitude wood": "奴役产出木头",
    "Municipal Administration": "市政管理局",
    "The village comes to life": "村子生机勃勃",
    "City Hall": "市政厅",
    "Heavy warrior": "重甲战士",
    "The best unit of the ancient era. Effective in both offense and defense (Shock)": "远古时代最好的单位。 攻防兼备（冲击）",
    "Shaping the pot": "塑造锅具",
    "Select an enemy to attack": "选择要攻击的敌人",
    "Local products": "本地产品",
    "The administrative heart of the settlement": "定居点的行政中心",
    "Artisan's workshops are beginning to produce efficiently": "工匠的作坊开始高效生产",
    "Accept": "接受",
    "Accept trade agreement": "接受贸易协议",
    "Improve": "改善",
    "Improve relationships": "改善关系",
    "Insult": "侮辱",
    "Relationships": "关系",
    "Son of a Theresmorian goat, your smell precedes you! This should make our relationships worse": "特勒斯摩利亚山羊的儿子，你的气味先于你!这会让我们的关系变得更糟",
    "Trade agreements": "贸易协定",
    "We will do our best to improve relations with the target nation": "我们将尽最大努力改善与目标国家的关系",
    "From a small provincial market to the monopoly of entire nations": "从小地方市场到全国垄断",
    "Local products tools": "本地产品工具",
    "Marketplace": "市场",
    "Mathematics copper": "数学产出铜",
    "Mathematics iron": "数学产出铁",
    "Mathematics stone": "数学产出石",
    "Merchant": "商人",
    "Merchant gold": "商人产出黄金",
    "Servitude copper": "奴役产出铜",
    "Servitude iron": "奴役产出铁",
    "Servitude stone": "奴役产出石头",
    "Stable food": "马厩产出食物",
    "Since ancient times, our predecessors have relied on the gods for grace and help. Their prayers generated the faith so pleasing to the higher beings who command us. They released the Mana on Theresmore so that every person could feel it and honor it. Magic is an essential part of our nation, and mastering it will enable us to gain immense benefits": "自古以来，我们的前辈都依靠神灵的恩惠和帮助。 他们的祈祷产生了令命令我们的更高生命如此愉悦的信仰。 他们在 Theresmore 上释放了法力，让每个人都能感受到并尊重它。 魔法是我们国家的重要组成部分，掌握它将使我们获得巨大的利益",
    "End Ancient Era": "结束远古时代",
    "Faith": "信仰",
    "Magic": "魔法",
    "Our settlement is ready for a leap forward": "我们的定居点已准备好迎接飞跃",
    "Prayers": "祈祷",
    "Spells": "法术",
    "Temple": "寺庙",
    "The Mana is the essence of Theresmore": "法力是 Theresmore 的精髓",
    "There are no prayers at the moment": "暂时没有祈祷",
    "There are no spells at the moment": "目前没有法术",
    "A part of the Palisade": "栅栏的一部分",
    "Several autonomous city-states flourish in the sunny sands of the south. They answer to the great Emir of Zultan, the most powerful of these metropolises. A people developed in the most inhospitable lands of Theresmore and flourished through trade reaching every part of the continent. They protect the flame of Atamar who is said to have founded the city of Zultan": "几个自治城邦在南方阳光明媚的沙滩上蓬勃发展。 他们对这些大都市中最强大的祖尔坦的伟大埃米尔负责。 一个民族在 Theresmore 最荒凉的土地上发展起来，并通过到达大陆每个地方的贸易而繁荣起来。 他们保护着据说建立了祖尔坦城的阿塔玛的火焰",
    "A part of the City center": "市中心的一部分",
    "Anyone who visits our city will be amazed by the splendor of our arts": "任何访问我们城市的人都会惊叹于我们艺术的辉煌",
    "City center": "城市中心",
    "City center part": "市中心部分",
    "Faith cap": "信仰上限",
    "Let's make sure that we turn our settlement into an Oppidum": "让我们确保将我们的定居点变成一个 小镇",
    "Palisade": "栅栏",
    "Palisade part": "栅栏部分",
    "Settlement defense": "定居点防御",
    "The ancient gods will show us the way": "古神会为我们指明方向",
    "Wonders": "奇迹",
    "Zultan Emirate": "祖尔坦酋长国",
    "A wagon in which bandits trapped civilians": "匪徒困住平民的马车",
    "From their small encampment they raid the nearby countryside": "他们从他们的小营地突袭附近的乡村",
    "Kobold looters": "狗头人掠夺者",
    "Prisoner wagon": "囚车",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "+": "+",
    "s": "s",
    "es": "es",
    "e": "e",
    "o": "o",
    "r": "r",
    "m": "m",
    "v": "v",
    "%": "%",
    "/": "/",
    "The": "The",
    "enemies": "enemies",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Warning ": "警告 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Your village is empty, look for some new technology": " 你的村庄是空的，寻找一些新技术",
    "We can now build Common house": " 我们现在可以建造普通房屋",
    "Being able to feed the population has always been the biggest problem for early human settlements. We can now build Farm": " 能够养活人口一直是早期人类住区的最大问题。 我们现在可以建立农场",
    "We can now build Lumberjack camp": "  我们现在可以建造伐木工人营地",
    "Your settlement is starving, produce food!": "  你的定居点正在挨饿，生产食物！",
    "We can now build the Quarry": "  我们现在可以建造采石场",
    "Your settlement is starting to grow": "你的定居点开始扩大",
    "Our farmers are learning to farm better and better": "我们的农民正在学习越来越好地耕作",
    "5 Farm : The pleasure of growing grass": "5 农场：种草的乐趣",
    "5 Common House : A small Village": "5 普通房屋：一个小村庄",
    "Now we can build the Store": "现在我们可以建立贮藏室了",
    "FAME is a resource you get from the great works or great deeds you will do in Theresmore. At prestige time it will be used to calculate your LEGACY points that will allow you to get permanent bonuses in each of your game runs!": "声誉 是您从在 Theresmore 所做的伟大作品或伟大事迹中获得的资源。 在声望时，它将用于计算您的 遗产 点数，这将使您在每次游戏运行中获得永久奖励！",
    "Your settlement is starving, produce food!": "你的定居点正在挨饿，生产食物！",
    "Being able to feed the population has always been the biggest problem for early human settlements. We can now build Farm": "能够养活人口一直是早期人类住区的最大问题。 我们现在可以建立农场",
    "By working on the first pieces of craftsmanship, we can create tools. We can build the Artisan workshop": "通过研究第一批工艺，我们可以创造工具。 我们可以建造工匠作坊",
    "We can now build the School": "我们现在可以建造学校了",
    "With the artisan's workshops we will be able to build all the tools that will help in other jobs": "通过工匠的作坊，我们将能够制造出有助于其他工作的所有工具",
    "As we continue digging in the quarry we may find more minerals": "随着我们继续在采石场挖掘，我们可能会发现更多的矿物",
    "Backup your save : Just a reminder that you may want to backup your save every once in a while, just in case": "备份您的存档：只是提醒您…每隔一段时间备份一次您的存储，以防万一",
    "The memory of the past times is alive and is handed down from father to son, we can now research the mythology": "过去时代的记忆是鲜活的，是父子相传的，我们现在可以研究神话了",
    "We can start train archers and scouts, it will consume food but will provide us with protection and we can send explorers to understand Theresmore and its mysteries": "我们可以开始训练弓箭手和侦察兵，它会消耗食物，但会为我们提供保护，我们可以派探险家了解 Theresmore 及其奥秘",
    "We can now train light chivalry, a good and fast assault unit. Now we can build Stable": "我们现在可以训练轻骑兵，这是一个优秀而快速的突击部队。 现在我们可以建立马厩",
    "Now we can build the Mine": "现在我们可以建造矿井了",
    "Quarrymen have found metal deposits": "采石场发现金属矿床",
    "Now we can dedicate a shrine to our beliefs. Attention: only one shrine can be built": "现在我们可以为我们的信仰献上一座神殿。 注意：只能建造一座神殿",
    "A community of woodcarvers is emerging": "一个木雕社区正在兴起",
    "5 Lumberjack Camp : Tree after tree": "5 伐木工营地：一棵又一棵树",
    "New tools increase stone quarrying": "新工具提高采石量",
    "5 Quarry : Increasing back pain": "5 采石场：背痛加剧",
    "We can train spearmen and warriors, our army can both defend and attack effectively. Now we can build Barracks": "我们可以训练矛兵和战士，我们的军队可以有效地防御和攻击。 现在我们可以建造兵营了",
    "With the discovery of mathematics we begin to get serious about productions": "随着数学的发现，我们开始认真对待产品",
    "Your scout explored the territories for days but came back empty handed": "你的侦察兵在这片领土上探索了几天，但空手而归",
    "With the first barracks comes our mighty army": "我们强大的军队伴随着第一个军营而来",
    "Our scout discovered a wagon full of prisoners. Some bandits guard it": "我们的侦察员发现了一辆装满囚犯的马车。 一些土匪守卫着它",
    "Our scouts went west where they found a technologically advanced kingdom. Great castles and gleaming armors are their pride and joy": "我们的侦察兵去了西部，在那里他们发现了一个技术先进的王国。 宏伟的城堡和闪闪发光的盔甲是他们的骄傲和快乐",
    "Horses for the army and cows for the market. The village is thriving": "马供军队，牛供市场。这个村庄很繁荣",
    "We can now train heavy warriors, the first shock troop in Theresmore": "我们现在可以训练重型战士，这是 Theresmore 的第一支突击部队",
    "5 School : The beginning of scientific thought": "5 学校：科学思想的开端",
    "15 Common House : A growing Village": "15 普通房屋 : 一个成长中的村庄",
    "Congratulations, your little settlement is now a village!": "恭喜，你的小定居点现在是一个村庄！",
    "Now we can build the City Hall": "现在我们可以建造市政厅了",
    "5 Artisan Workshop : Shaping the pot": "5 工匠作坊：塑造锅具",
    "Your settlement is known for its local products": "您的定居点以其当地产品而闻名",
    "Our relationships are now neutral with this faction": "我们现在与这个派系的关系是中立的",
    "Now we can build the Marketplace": "现在我们可以建立市场",
    "By building a temple we will have access to prayers and spells": "通过建造一座寺庙，我们可以获得祈祷和法术",
    "Now we can build Palisade and Wall": "现在我们可以建造栅栏和围墙",
    "Our scout discovered a small band of Kobold looters": "我们的侦察员发现了一小群狗头人掠夺者",
    "Our scouts went into the deserts of the south discovering a rich kingdom whose flourishing trade crosses all Theresmore": "我们的侦察兵进入南方的沙漠，发现了一个富有的王国，其繁荣的贸易遍及整个 Theresmore",
    "Let's finish the ancient era by building the City Center so we can advance": "让我们通过建造市中心来结束古代时代，这样我们就可以前进",
    "Human settlements need centers where they can exercise justice and power": "人类住区需要能够行使正义和权力的中心",
    "Kobold looters: You have been defeated!": "狗头人掠夺者：你被打败了！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)\/s$/,
    /^\+([\d\.]+)\%$/,
    /^\+([\d\.]+)\/s$/,
    /^\-([\d\.]+)\/s$/,
    /^\[([\d\.]+):([\d\.]+)\] $/,
    /^([\d\.]+) \(\-([\d\.]+)\)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.,]+) \(\-([\d\.,]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^You have been defeated! Died: ([\d\.,]+) Warrior, ([\d\.,]+) Heavy warrior, ([\d\.,]+) Archer.$/, '你被击败了！ 死亡：$1 名战士，$2 名重装战士，$3 名弓箭手。'],
    [/^(.+) Died: ([\d\.,]+) Warrior, ([\d\.,]+) Heavy warrior, ([\d\.,]+) Archer$/, '$1 死亡：$2 战士，$3 重装战士，$4 弓箭手'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Common House$/, '$1 普通房屋'],
    [/^([\d\.,]+) Farm$/, '$1 农场'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Artisan Workshop$/, '$1 工匠作坊'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);