var doc = document,
    totalunit = 0,
    atomsaccu = 0,
    atomsinvest = 0,
    bonusinvest = 0,
    specialsbought = 0,
    upgradesbought = 0,
    timeplayed = 0,
    tickspeed = 100,
    constel2 = 1,
    totalAtome = 1;
var atomepersecond = 0,
    totalsizeM = new BigNumber("0"),
    totalsizeK = new BigNumber("0"),
    totalsizeL = new BigNumber("0");
var arrayToolTip = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    noti = true,
    upgradeAll = new Array(75),
    arraySectionNames = ['Quantum','Molecular','Cellular','Miniature','Organic','Massive','Planetary','Stellar','Celestial','Galactic','Hypergalactic','Bonus','Special','Universal','Achievement'],
    arrayachiRec = [1,5,25,50,75,100,150,200,250,300,350,400,450,500,600,700,800,900,1000],
    arraybonusRec = [1,5,25,50,100,250,500,750,1000,1250,1500],
    arrayspecRec = [1,5,25,50,75];
    arrayachiesRec = [10,50,100,150,200,250];
    tableUpgradesConstruct();

var arAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s"];
var prestige = 1.00;
var Px = 75;
var Py = 75;
var arrayNames = ["quantum foam", "neutrino", "preon", "electron core", "proton", "uranium nucleus", "gamma ray", "angstrom", "carbon nanotube", "cell membrane", "largest virus", "white blood cell", "human hair", "grain of sand", "coffee bean", "cup", "human", "giant earthworm", "oak tree", "redwood tree", "hoover dam", "eiffel tower", "angel falls", "mt everest", "ganymed", "nereid", "pluto", "mars", "earth", "uranus", "jupiter", "alpha centauri c", "alpha centauri b", "sun", "sirius a", "regulus", "pollux", "arcturus", "aldebaran", "rigel", "gacrux", "deneb", "pistol star", "v382 carinae", "v354 cephei", "kuiper belt", "homunculus nebula", "stingray nebula", "oort cloud", "cat\'s eye nebula", "ring nebula", "helix nebula", "crab nebula", "pillars of creation", "great orion nebula", "solar neighborhood", "omega centauri", "m54 globular cluster", "tarantula nebula", "sagittarius dwarf galaxy", "small magellanic cloud", "large magellanic cloud", "ngc 7714", "triangulum galaxy", "black eye galaxy", "milky way galaxy", "andromeda galaxy", "ngc 1232", "virgo a", "ngc 4889", "galactic group", "ic 1101", "virgo galactic group", "galactic supercluster", "entire universe"];

var gameVersion = 1.83;
var audioMute = false;

var description = [
    "量子泡沫（也被称为时空泡沫）是约翰·惠勒（John Wheeler）在1955年设计的量子力学中的一个概念。泡沫被认为是宇宙结构的基础。 另外，量子泡沫可以用来作为定量描述亚原子时空湍流的极小距离。",
    "中微子是一种电中性，弱相互作用的基本亚原子粒子。 中微子（意大利语中的“中性一点”）由希腊字母ν表示。 所有的证据都表明，中微子有质量，但是它们质量的上限是微小的，即使是亚原子粒子的标准。",
    "在粒子物理学中，前缀是“点状”粒子，被认为是夸克和轻子的子成分。 这个词是由Jogesh Pati和Abdus Salam于1974年提出的。对preon模型的兴趣在20世纪80年代达到了顶峰，但随着粒子物理的标准模型继续描述物理学大部分成功",
    "电子是具有负的基本电荷的亚原子粒子。 电子属于轻子粒子族的第一代，通常认为它们是基本粒子，因为它们没有已知的组分或亚结构。",
    "质子是1个基本电荷的亚原子粒子和正电荷。 质子和中子统称为“核子”。 “质子”这个名字是1920年由欧内斯特·卢瑟福（Ernest Rutherford）赋予氢核的。",
    "铀是元素周期表中act系元素中的银白色金属化学元素，符号是<b>U</b>和原子序数<b>92</b>。 一个铀原子有92个质子和92个电子，其中6个是价电子。",
    "伽玛辐射也被称为伽马射线，并且由希腊字母γ表示，是指极高频率的电磁辐射，因此是每个光子的高能量。 伽马射线是电离辐射，因此是生物危害性的。",
    "埃斯通常用于自然科学和技术，以表示原子，分子和微观生物结构的大小，化学键的长度，晶体中原子的排列，电磁辐射的波长以及集成电路的尺寸 部分。",
    "碳纳米管（CNT）是具有圆柱形纳米结构的碳的同素异形体。 这些柱状碳分子具有不寻常的性质，这对于纳米技术，电子学，光学和其他材料科学和技术领域是有价值的。",
    "细胞膜（也称为质膜或细胞质膜）是将所有细胞内部与外部环境分开的生物膜。 细胞膜选择性地透过离子和有机分子，并控制物质进出细胞的运动。",
    "病毒是一种小的传染剂，只能在其他生物的活细胞内复制。 病毒可以感染所有类型的生命形式，从动物和植物到细菌和古细菌。 动物中的病毒感染引起通常消除感染病毒的免疫应答。",
    "白细胞（WBC）也称为白细胞或白细胞，是免疫系统的细胞，参与防御传染病和外来入侵者的身体。 血液中的白细胞数量往往是疾病的指标。",
    "头发是从真皮中发现的毛囊生长的丝状生物材料。 头发是哺乳动物的决定性特征之一。 除了无毛的皮肤区域，人体被毛囊覆盖，产生粗端和细毛。",
    "沙子是由细碎的岩石和矿物颗粒组成的天然存在的颗粒状物质。 根据当地的岩石来源和条件，砂的组成是非常不同的，但内陆大陆和非热带沿海地区最常见的成分是二氧化硅，通常是石英。",
    "咖啡豆是咖啡植物的种子，是咖啡的来源。 这是红色或紫色水果内的坑，通常被称为樱桃。 即使它们是种子，因为它们与真豆相似，所以它们被称为“豆类”。",
    "一个杯子是一个小的，敞开的容器，用于携带和饮用饮料。 它可能由木头，塑料，玻璃，黏土，金属，石头，瓷器或其他材料制成，并可能有一个柄，手柄或其他装饰物。",
    "现代人类是人类进化枝中唯一现存的成员，它是以直立姿势和双足行走为特征的大猩猩的一个分支; 手动灵活和增加工具使用; 而且是一个更大，更复杂的大脑和社会的大趋势。",
    "蚯蚓是一种常见于土壤中的管状分段动物，以活的和死的有机物质为食。 它的消化系统贯穿其身体的长度。 它通过皮肤进行呼吸。",
    "橡树是属于栎属的一种乔木或灌木，拥有约600种现存物种。 俗名“橡树”也可能出现在相关属的物种名称中，特别是石栎。 该属植物属于北半球，包括亚洲和美洲从低温到热带纬度的落叶和常绿植物。",
    "红杉科（Redwoods）是柏科（Cupressaceae）科的亚科。 红木种类包含世界上最大和最高的树木。 这些树可以活到几千年。 整个亚科濒临灭绝。",
    '胡佛水坝，曾经被称为博尔德水坝，是美国亚利桑那州和内华达州之间边界的科罗拉多河黑峡谷的混凝土拱重力坝。 1931年至1936年间，大萧条期间修建，1935年9月30日由富兰克林·罗斯福总统执行。',
    "艾菲尔铁塔是位于巴黎战神广场的铁格子塔。 它是以工程师古斯塔夫埃菲尔（Gustave Eiffel）的名字命名的，他的公司设计和建造了塔楼。 塔是巴黎最高的建筑物，也是世界上访问量最大的有偿古迹。",
    "安吉尔瀑布是委内瑞拉的瀑布。 它是世界上最高的不间断的瀑布，高979米（3212英尺），落差807米（2,648英尺）。 瀑布落在Caniima国家公园的Auyantepui山的边缘，这是玻利瓦尔州Gran Sabana地区被联合国教科文组织列为世界遗产的地方。",
    "珠穆朗玛峰是地球上最高的山峰。 它位于喜马拉雅山的Mahalangur地区。 它的峰值海拔是8,848米（29,029英尺），是地球中心的第五个最远点。",
    "1036年Ganymed是最大的近地小行星，直径约32-34公里。 它于1924年10月23日被瓦尔特·巴德发现。由于早期的发现日期，贡伊梅德拥有丰富的观测历史。",
    "Nereid是海王星的第三大卫星。 它有一个高度偏心的轨道。 这是海王星第二个被发现的月亮，由Gerard Kuiper于1949年发现。它以Nereids，希腊神话中的海若虫和海王星的侍从而命名。",
    "冥王星是柯伊伯带最大的物体，是直接围绕太阳旋转的第十大物体。 它是厄里斯之后第二大质量已知的矮行星。 像其他柯伊伯带的物体一样，冥王星主要由岩石和冰组成，相对较小，约为月球质量的六分之一，体积的三分之一。",
    "火星是来自太阳的第四颗行星，是水星以后太阳系第二小的行星。 以罗马战争之神命名，它常被形容为“红色星球”，因为其表面上流行的氧化铁使其外观呈现红色。",
    '地球是太阳系中第三近的行星，是太阳系中最密集的行星，是太阳系中四颗最大的地球行星，也是唯一适应生命的天体。 它拥有数以百万计的物种，其中包括全球人口，受到其生物圈和矿物质的支持和滋养。',
    "天王星是太阳的第七颗行星。 它是太阳系中第三大行星半径和第四大行星质量。 天王星的组成与海王星类似，两者的化学成分都不同于木星和土星。",
    "木星是来自太阳的第五颗行星，也是太阳系中最大的行星。 它是太阳系质量千分之一的天然气巨人，但却是太阳系其他所有行星总质量的两倍半。",
    "Proxima Centauri是距离太阳约4.24光年的红矮星，在G云内，在半人马星座内。 它在1915年被南非联合天文台的主任苏格兰天文学家罗伯特·英尼斯（Robert Innes）发现，是距离太阳最近的已知恒星",
    "阿尔法半人马座或托里曼是人马座南星座中最亮的恒星，也是夜空中第三颗最亮的恒星。 阿尔法半人马座系统距太阳4.37光年，是我们太阳系最接近的恒星系统。",
    "太阳是太阳系中心的明星。 它几乎是完美的球形，由热等离子体与磁场交织组成。 一旦被天文学家视为一颗相对较小的恒星，现在认为太阳比银河系中85％的恒星要亮。",
    "天狼星是夜空中最亮的星星。 它的视觉表观强度为-1.46，几乎是下一颗最亮星Canopus的两倍。 天狼星由于其内在的光度和接近地球而显得明亮。 它比太阳高25倍。",
    "轩辕星座是狮子座中最亮的恒星，也是夜空中最亮的恒星之一，距地球约79光年。 轩辕是由四颗星组成的多星系统，组成两对。 轩辕A由一个蓝白色的主序星组成。",
    "北极星是双子座的双子星座北极星。 它是一个橙色色调的演变巨星。 在一个明显的视觉大小1.1，波吕克尔是星座中最亮的星星; 比邻居的蓖麻（阿尔法Geminorum）更亮。",
    "星座Boctos的大角星是北半球最亮的星星。 它的亮度是-0.04，是夜空中第四颗最亮的星。 它距离地球只有36.7光年，与维加（Vega）和天狼星（Sirius）一起，是太阳附近最亮的恒星之一。",
    "Aldebaran是一颗橙色的巨星，位于金牛座生肖星座约65光年。 平均视星等0.87，是星座中最亮的恒星，也是夜空中最亮的恒星之一。",
    "也被拜耳称为Beta Orionis的Rigel是猎户星座中最亮的恒星，也是夜空中第七颗最亮的恒星，视觉强度为0.12。 从地球上看，这颗恒星实际上是一个三星系统，主星（Rigel A）是一颗蓝白色超巨星，绝对星等-7.84，与太阳一样，发光量约为12万倍。",
    "伽玛十字，通常被称为Gacrux，是距离太阳最近的红巨星。 距离Gacrux的距离是通过在Hipparcos任务期间进行的视差测量确定的，距离地球88.6光年。",
    "Deneb是天鹅星座中最亮的星。 它是夜空中第19颗最亮的星，表观强度为1.25。 一颗蓝白色的超巨星Deneb也是附近最亮的恒星之一。",
    "手枪星是蓝色超巨星，是银河系中最明亮的已知恒星之一。 它是银河中心地区Quintuplet星系群中众多大型年轻恒星之一。 这颗星星的名字是手枪星云的形状，照亮了它的形状。 它距离地球约二万五千光年在射手座的方向。",
    "V382 Carinae也被称为x Carinae，是Carina星座中的明星。 V382 Carinae是一种黄色的G型超巨人，平均视星等+3.93。 距地球8,900光年，是我们太阳的700倍。",
    "V354 Cephei是位于银河系内的红巨星。 这是一个不规则的变量，距离我们的太阳约9,000光年，目前被认为是已知最大的恒星之一，其半径估计值为太阳的690-1,520倍，最大值为1060000000千米 程度。",
    "Kuiper带有时被称为Edgeworth-Kuiper带（在天文学家Kenneth Edgeworth和Gerard Kuiper之后）是超出行星的太阳系的一个区域。 它与小行星带很相似，但是它大得多（20倍宽）和20到200倍大。",
    "Homunculus星云是围绕大质量星系Eta Carinae的反射星云。 这个星云嵌入在更大的Eta Carinae星云中，一个电离的氢区域。 人们认为Homunculus（从拉丁文的意思是“小人”）被Eta Carinae的巨大爆发排出。",
    "黄貂鱼星云是已知最年轻的行星状星云。 黄貂鱼位于南部星座Ara（祭坛）的方向，距离18,000光年远。 虽然它是我们的太阳系大小的130倍，但是黄貂鱼星云只有大多数其他已知行星状星云的十分之一。",
    "Oort云或Öpik-Oort云，以荷兰天文学家Jan Oort的名字命名，是一个主要由结冰星体构成的球状云，被认为能够围绕太阳以高达50,000小时的天文单位。 这将云放置在Proxima Centauri距离的四分之一处。",
    "猫眼星云NGC 6543是Draco星座中的行星状星云。 在结构上，它是最复杂的星云之一，具有高分辨率的哈勃太空望远镜观测结果，显示出结，喷气，气泡和坚固的弧形特征等显着的结构。",
    "环形星云（也被称为梅西耶57，M57或NGC 6720）是莱拉北部星座中的行星状星云。 这种物体是由一颗红色巨星将电离气体的外壳排放到周围的星际介质中形成的，这颗巨星正在经历发展的最后一个阶段，才成为一个白矮星。",
    "螺旋星云，也被称为螺旋，NGC 7293，是位于宝瓶星座的大型行星状星云。 由卡尔·路德维希·哈丁（Karl Ludwig Harding）发现，可能在1824年以前，这个物体是所有明亮的行星状星云中最接近地球的物体之一。 估计的距离大约是215光年或700光年。 螺旋星云有时在流行文化中被称为“上帝之眼”，以及“索伦之眼”",
    "螃蟹星云是金牛座星座中的超新星遗迹和脉冲星风星云。 与1054年中国天文学家记录的一颗明亮的超新星相对应，这颗星云后来在1731年被英国天文学家约翰·贝维斯（John Bevis）观测到。这颗星云的视星等为8.4，与土星最大的月亮相当，肉眼不可见 但可以在有利的条件下使用双筒望远镜制作。",
    "“创造的支柱”是哈勃望远镜拍摄的距离地球约7000光年的鹰星云中的星际气体和尘埃的象鼻的照片的名称。 他们之所以这样命名，是因为气体和尘埃正在创造新的恒星，同时也被最近形成的附近恒星的光所侵蚀。",
    "猎户座星云（也称为梅西耶42，M42或NGC 1976）是位于猎户座星座Orion的腰带以南的弥漫星云。 它是最亮的星云之一，在夜空中肉眼可见。 M42位于1344±20光年的距离，是地球最密集的恒星形成区域。 估计M42星云是24光年。 它的质量约为太阳质量的2000倍。",
    "太阳附近是与以太阳为中心并垂直于银河系盘的圆柱相关联的空间。 这个太阳能汽缸位于距银河中心约8千米的地方，半径1千米。 因此，太阳附近包括属于银河光盘和光环的各种物理实体，诸如行星，不同质量，不同年龄和进化阶段的恒星，星际介质和HII地区等等。",
    "欧米茄半人马座或NGC 5139，是在1677年由埃德蒙·哈雷（Edmond Halley）发现的半人马星座中的球状星团。位于距今15,800光年的地方，是银河系中最大的球状星团。 欧米茄半人马座与其他银河系球状星团非常不同，它被认为是另一个起源，是一个被破坏的矮星系的核心残骸。",
    "Messier 54（又名M54或NGC 6715）是射手座星座中的一个球状星团。 这是查尔斯·梅西耶（Charles Messier）于1778年发现的，后来被列入他的彗星状物体目录中。 以前认为属于距离地球约5万光年的银河系，1994年发现M54最有可能属于射手座矮椭圆星系",
    "狼蛛星云（也被称为30 Doradus，或NGC 2070）是大麦哲伦星云中的H II地区。 它最初被认为是一颗明星，但在1751年，尼古拉斯·路易·德·拉卡伊（Nicolas Louis de Lacaille）认识到了它的星云本质。 狼蛛星云有一个明显的星等8.考虑到它的距离约49千卡（160,000光年），这是一个非常明亮的非恒星的对象。",
    "射手座矮星球体是一个椭圆形的银河系卫星星系。 它由四个球状星团组成，主星团在1994年被发现。Sag DEG的直径约为1万光年，距离地球约7万光年，在极轨道上行进约5万光 银河系核心的一年。",
    "小麦哲伦云是一个矮星系。 它被归类为一个矮小的不规则星系。 它直径约7000光年，包含数亿颗恒星。 它的总质量约为太阳质量的70亿倍。 有人推测，SMC曾经是一个被银河系中断而变得不规则的螺旋星系。",
    "大麦哲伦云是一个附近的星系，是银河系的卫星。 距离略低于50千哩（≈163,000光年），LMC是距离银河系最近的第三近星系，射手座矮小的球状（〜16千泊），假定的犬夜蛾主要矮星系更靠近 银河系的中心。",
    "NGC 7714螺旋星系在星座双鱼座。 它是1830年9月18日John Herschel发现的。NGC 7714和NGC 7715是相互作用的星系。 这对天体也被称为Arp 284. NGC 7714似乎是一个高度扭曲的螺旋，可能是一个被禁止的螺旋星系。",
    "三角形星系是一个螺旋星系，距离地球三角形约300万光年。 它被列为梅西耶33或NGC 598，有时也被非正式地称为风车星系，它与梅西耶101共有一个绰号。三角星系是本地星系团的第三大成员，包括银河系 ，仙女座星系和其他约44个较小的星系。",
    "黑眼银河（也称恶眼银河，被命名为Messier 64，M64或NGC 4826）是爱德华·皮奥特（Edward Pigott）于1779年3月发现的，同年4月被Johann Elert Bode独立发现， 它有一个壮观的暗带，在银河明亮的原子核前面吸收尘埃，引起了“黑眼圈”或“邪恶之眼”星系的绰号。",
    "银河系是包含我们的太阳系的星系。 它的名字“乳白色”源于它的外观，它是一个昏暗的夜光天空，在这个夜空中肉眼无法辨别出个别的星星。 从地球上看，银河系表现为一个乐队，因为从银河系内可以看到它的盘状结构。",
    "仙女座星系是仙女座星座中距地球约250万光年的螺旋星系。 也被称为梅西耶31，M31，或NGC 224，它通常被称为大仙女座星云在旧的文本。 仙女座星系是我们银河系最接近的旋涡星系，但并不是最接近的星系。",
    "NGC 1232是在Eridanus星座大约6000万光年外的中间旋涡星系。 它由数以百万计的明亮的星星和黑暗的尘埃，以旋转的中心为旋转的旋臂武装。 包含明亮的蓝色恒星的开放星团沿着这些螺旋臂撒落，其间有浓密的星际尘埃",
    "处女座A（也被称为M87，梅西尔87或NGC 4486）是超巨星椭圆星系。 1781年，法国天文学家查尔斯梅西耶（Charles Messier）发现了它，把它编成了一个模糊的特征。 位于处女座北部的第二个最亮的星系位于离地球约5350万光年的地方。",
    "NGC 4889，也被称为考德威尔35号，是一个巨型4级椭圆星系，在昏迷星系中最亮，在昏迷星座中有一个考德威尔星体。 它位于G级肉眼明星Beta Comae Berenices，星系NGC 4874和北方银河极附近。 它距离大约有3.08亿光年远。",
    "星系团由不到50人左右的成员组成，受重力约束; 大于一组的星系集合称为星系团或超星系团。 我们的星系是一个称为本地组的星系团的一部分。 单个星系速度的传播速度约为150公里/秒。",
    "IC 1101是位于Abell 2029星系团中心的超巨星椭圆星系，离地球约10.7亿光年。 该星系被归类为超椭圆形到透镜状，是A2029中最亮的星系（因此它的另一个名称是A2029-BCG; BCG意为最亮的星系团）。",
    "处女座星系是星系团。 由大约1300个（甚至可能达到2000个）成员星系组成，这个星系群构成了处女座超星系团的核心，其中地方群是一个离群的成员。",
    "超星系团是较小的星系团和星系团的大群体，是宇宙最大的已知结构之一。 超星系团的存在表明宇宙中的星系分布不均匀， 他们中的大多数是以团队的形式组织起来的。",
    "宇宙是所有的时空以及其中存在的一切，包括所有行星，恒星，星系，星系间空间的内容，最小的亚原子粒子，以及所有的物质和能量。 类似的术语包括宇宙，世界，现实和自然。 可观测的宇宙半径大约为460亿光年。"
];

var costall = [];
var pourall = [];
var apsall = [];
var bonusCost = [];
var nextunit = 0;
var gameSpeed = 1;

function AllInitialize() {

    var nbrC = 1;
    var coutAdd = 0;
    costall.push(nbrC);

    var nbrP = 10;
    pourall.push(nbrP);

    var nbrAps = 0.1;
    apsall.push(nbrAps);

    var baseCost = 2,
        iniCost = 2,
        baseMultiX = 5,
        baseMultiY = 2;

    for (var i = 0; i < 75; i++) {
        nbrC *= (5 + coutAdd);
        coutAdd += 0.05;
        costall.push(nbrC);

        nbrP *= 1.005;
        pourall.push(nbrP);

        nbrAps *= (nbrAps != 2.5) ? 5 : 4;
        apsall.push(nbrAps);

        bonusCost[i] = [];
        baseCost = iniCost;
        for (var y = 0; y < 20; y++) {
            bonusCost[i][y] = baseCost;
            baseCost *= baseMultiY;
        }
        iniCost *= baseMultiX;
    }
}

var arrayall = {
    arrayquantumfoam: undefined,
    arrayneutrino: undefined,
    arraypreon: undefined,
    arrayelectroncore: undefined,
    arrayproton: undefined,
    arrayuraniumnucleus: undefined,
    arraygammaray: undefined,
    arrayangstrom: undefined,
    arraycarbonnanotube: undefined,
    arraycellmembrane: undefined,
    arraylargestvirus: undefined,
    arraywhitebloodcell: undefined,
    arrayhumanhair: undefined,
    arraygrainofsand: undefined,
    arraycoffeebean: undefined,
    arraycup: undefined,
    arrayhuman: undefined,
    arraygiantearthworm: undefined,
    arrayoaktree: undefined,
    arrayredwoodtree: undefined,
    arrayhooverdam: undefined,
    arrayeiffeltower: undefined,
    arrayangelfalls: undefined,
    arraymteverest: undefined,
    arrayganymed: undefined,
    arraynereid: undefined,
    arraypluto: undefined,
    arraymars: undefined,
    arrayearth: undefined,
    arrayuranus: undefined,
    arrayjupiter: undefined,
    arrayalphacentauric: undefined,
    arrayalphacentaurib: undefined,
    arraysun: undefined,
    arraysiriusa: undefined,
    arrayregulus: undefined,
    arraypollux: undefined,
    arrayarcturus: undefined,
    arrayaldebaran: undefined,
    arrayrigel: undefined,
    arraygacrux: undefined,
    arraydeneb: undefined,
    arraypistolstar: undefined,
    arrayv382carinae: undefined,
    arrayv354cephei: undefined,
    arraysolarsystemskuiperbelt: undefined,
    arrayhomunculusnebula: undefined,
    arraystingraynebula: undefined,
    arraysolarsystemsoortcloud: undefined,
    arraycatseyenebula: undefined,
    arrayringnebula: undefined,
    arrayhelixnebula: undefined,
    arraycrabnebula: undefined,
    arraypillarsofcreation: undefined,
    arraygreatorionnebula: undefined,
    arraysolarsystemssolarneighborhood: undefined,
    arrayomegacentauri: undefined,
    arraym54globularcluster: undefined,
    arraytarantulanebula: undefined,
    arraysagittariusdwarfgalaxy: undefined,
    arraysmallmagellaniccloud: undefined,
    arraylargemagellaniccloud: undefined,
    arrayngc7714: undefined,
    arraytriangulumgalaxy: undefined,
    arrayblackeyegalaxy: undefined,
    arraymilkywaygalaxy: undefined,
    arrayandromedagalaxy: undefined,
    arrayngc1232: undefined,
    arrayvirgoa: undefined,
    arraycdgalaxyngc4889: undefined,
    arraylocalgalacticgroup: undefined,
    arrayic1101: undefined,
    arrayvirgogalacticgroup: undefined,
    arraylocalgalacticsupercluster: undefined,
    arrayentireuniverse: undefined,
    key: function(n) {
        return this[Object.keys(this)[n]];
    }
};

function arrayInitialize() {
    var nbr = 0.1;
    for (var arr in arrayall)
        if (arr != "key") {
            arrayall[arr] = [0, nbr];
            nbr *= (nbr != 2.5) ? 5 : 4;
        }
}

var arrayINI = {
    arrayquantumfoam: undefined,
    arrayneutrino: undefined,
    arraypreon: undefined,
    arrayelectroncore: undefined,
    arrayproton: undefined,
    arrayuraniumnucleus: undefined,
    arraygammaray: undefined,
    arrayangstrom: undefined,
    arraycarbonnanotube: undefined,
    arraycellmembrane: undefined,
    arraylargestvirus: undefined,
    arraywhitebloodcell: undefined,
    arrayhumanhair: undefined,
    arraygrainofsand: undefined,
    arraycoffeebean: undefined,
    arraycup: undefined,
    arrayhuman: undefined,
    arraygiantearthworm: undefined,
    arrayoaktree: undefined,
    arrayredwoodtree: undefined,
    arrayhooverdam: undefined,
    arrayeiffeltower: undefined,
    arrayangelfalls: undefined,
    arraymteverest: undefined,
    arrayganymed: undefined,
    arraynereid: undefined,
    arraypluto: undefined,
    arraymars: undefined,
    arrayearth: undefined,
    arrayuranus: undefined,
    arrayjupiter: undefined,
    arrayalphacentauric: undefined,
    arrayalphacentaurib: undefined,
    arraysun: undefined,
    arraysiriusa: undefined,
    arrayregulus: undefined,
    arraypollux: undefined,
    arrayarcturus: undefined,
    arrayaldebaran: undefined,
    arrayrigel: undefined,
    arraygacrux: undefined,
    arraydeneb: undefined,
    arraypistolstar: undefined,
    arrayv382carinae: undefined,
    arrayv354cephei: undefined,
    arraysolarsystemskuiperbelt: undefined,
    arrayhomunculusnebula: undefined,
    arraystingraynebula: undefined,
    arraysolarsystemsoortcloud: undefined,
    arraycatseyenebula: undefined,
    arrayringnebula: undefined,
    arrayhelixnebula: undefined,
    arraycrabnebula: undefined,
    arraypillarsofcreation: undefined,
    arraygreatorionnebula: undefined,
    arraysolarsystemssolarneighborhood: undefined,
    arrayomegacentauri: undefined,
    arraym54globularcluster: undefined,
    arraytarantulanebula: undefined,
    arraysagittariusdwarfgalaxy: undefined,
    arraysmallmagellaniccloud: undefined,
    arraylargemagellaniccloud: undefined,
    arrayngc7714: undefined,
    arraytriangulumgalaxy: undefined,
    arrayblackeyegalaxy: undefined,
    arraymilkywaygalaxy: undefined,
    arrayandromedagalaxy: undefined,
    arrayngc1232: undefined,
    arrayvirgoa: undefined,
    arraycdgalaxyngc4889: undefined,
    arraylocalgalacticgroup: undefined,
    arrayic1101: undefined,
    arrayvirgogalacticgroup: undefined,
    arraylocalgalacticsupercluster: undefined,
    arrayentireuniverse: undefined
};

function arrayInitializeINI() {
    var nbr = 0.1;
    for (var arr in arrayINI) {
        arrayINI[arr] = [0, nbr];
        nbr *= (nbr != 2.5) ? 5 : 4;
    }
    for (var b in arrayINI) {
        var aps = arrayINI[b][1];
        for (var x = 0; x < 19; x++) arrayINI[b].push(aps *= (x < 5) ? 2.0 : (x < 13) ? 3.0 : 5.0);
    }
}




var apsINI = {
    apsquantumfoam: undefined,
    apsneutrino: undefined,
    apspreon: undefined,
    apselectroncore: undefined,
    apsproton: undefined,
    apsuraniumnucleus: undefined,
    apsgammaray: undefined,
    apsangstrom: undefined,
    apscarbonnanotube: undefined,
    apscellmembrane: undefined,
    apslargestvirus: undefined,
    apswhitebloodcell: undefined,
    apshumanhair: undefined,
    apsgrainofsand: undefined,
    apscoffeebean: undefined,
    apscup: undefined,
    apshuman: undefined,
    apsgiantearthworm: undefined,
    apsoaktree: undefined,
    apsredwoodtree: undefined,
    apshooverdam: undefined,
    apseiffeltower: undefined,
    apsangelfalls: undefined,
    apsmteverest: undefined,
    apsganymed: undefined,
    apsnereid: undefined,
    apspluto: undefined,
    apsmars: undefined,
    apsearth: undefined,
    apsuranus: undefined,
    apsjupiter: undefined,
    apsalphacentauric: undefined,
    apsalphacentaurib: undefined,
    apssun: undefined,
    apssiriusa: undefined,
    apsregulus: undefined,
    apspollux: undefined,
    apsarcturus: undefined,
    apsaldebaran: undefined,
    apsrigel: undefined,
    apsgacrux: undefined,
    apsdeneb: undefined,
    apspistolstar: undefined,
    apsv382carinae: undefined,
    apsv354cephei: undefined,
    apssolarsystemskuiperbelt: undefined,
    apshomunculusnebula: undefined,
    apsstingraynebula: undefined,
    apssolarsystemsoortcloud: undefined,
    apscatseyenebula: undefined,
    apsringnebula: undefined,
    apshelixnebula: undefined,
    apscrabnebula: undefined,
    apspillarsofcreation: undefined,
    apsgreatorionnebula: undefined,
    apssolarsystemssolarneighborhood: undefined,
    apsomegacentauri: undefined,
    apsm54globularcluster: undefined,
    apstarantulanebula: undefined,
    apssagittariusdwarfgalaxy: undefined,
    apssmallmagellaniccloud: undefined,
    apslargemagellaniccloud: undefined,
    apsngc7714: undefined,
    apstriangulumgalaxy: undefined,
    apsblackeyegalaxy: undefined,
    apsmilkywaygalaxy: undefined,
    apsandromedagalaxy: undefined,
    apsngc1232: undefined,
    apsvirgoa: undefined,
    apscdgalaxyngc4889: undefined,
    apslocalgalacticgroup: undefined,
    apsic1101: undefined,
    apsvirgogalacticgroup: undefined,
    apslocalgalacticsupercluster: undefined,
    apsentireuniverse: undefined
};

function apsInitializeINI() {
    var nbr = 0.1;
    for (var aps in apsINI) {
        apsINI[aps] = nbr;
        nbr *= (nbr != 2.5) ? 5 : 4;
    }
}

AllInitialize();
arrayInitialize();
apsInitializeINI();
arMulti = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var allMeasures = ["0.00000000000000000000000000000000001","0.000000000000000000000001","0.000000000000000000001","0.000000000000000001","0.000000000000001","0.00000000000001","0.000000000001","0.0000000001","0.000000001","0.00000001","0.0000001","0.00001","0.0001","0.001","0.01","0.1","1.7","7","20","0.1","0.2","0.3","0.9","8.8","32","340","2 300","6 800","12 700","51 000","140 000","280 000","1 000 000","1 400 000","2 500 000","5 800 000","11 000 000","36 000 000","60 000 000","97 000 000","160 000 000","310 000 000","500 000 000","1 000 000 000","2 100 000 000","15 000 000 000","20 000 000 000","0.03","0.15","0.26","1.3","3","7","10","21","40","100","150","530","1 000","3 500","7 500","35 000","50 000","85 000","120 000","150 000","200 000","250 000","500 000","4 000 000","5 000 000","15 000 000","150 000 000","???"];
var allNumerical = ['-35','-24','-21','-18','-15','-14','-12','-10','-9','-8','-7','-5','-4','-3','-2','-1'];

arUnit = [
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost",0,0,0, "neutrino.jpg",0,0,0,0, [false], arrayall.arrayquantumfoam],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost2",0,0,0, "preon.jpg",0,0,0,0, [false], arrayall.arrayneutrino],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost3",0,0,0, "electroncore.jpg",0,0,0,0, [false], arrayall.arraypreon],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost4",0,0,0, "proton.jpg",0,0,0,0, [false], arrayall.arrayelectroncore],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost5",0,0,0, "uraniumnucleus.jpg",0,0,0,0, [false], arrayall.arrayproton],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost6",0,0,0, "gammaray.jpg",0,0,0,0, [false], arrayall.arrayuraniumnucleus],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost7",0,0,0, "angstrom.jpg",0,0,0,0, [false], arrayall.arraygammaray],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost8",0,0,0, "carbonnanotube.jpg",0,0,0,0, [false], arrayall.arrayangstrom],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost9",0,0,0, "cellmembrane.jpg",0,0, 0,0, [false], arrayall.arraycarbonnanotube],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost10",0,0,0, "largestvirus.jpg",0, 0,0,0, [false], arrayall.arraycellmembrane],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost11",0,0,0, "whitebloodcell.jpg",0,0,0,0, [false], arrayall.arraylargestvirus],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost12",0,0,0, "humanhair.jpg",0,0,0,0, [false], arrayall.arraywhitebloodcell],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost13",0,0,0, "grainofsand.jpg",0,0,0,0, [false], arrayall.arrayhumanhair],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost14",0,0,0, "coffeebean.jpg",0,0,0,0, [false], arrayall.arraygrainofsand],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost15",0,0,0, "cup.jpg",0,0,0,0, [false], arrayall.arraycoffeebean],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost16",0,0,0, "human.jpg",0,0,0,0, [false], arrayall.arraycup],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost17",0,0,0, "giantearthworm.jpg",0,0,0,0, [false], arrayall.arrayhuman],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost18",0,0,0, "oaktree.jpg",0,0,0,0, [false], arrayall.arraygiantearthworm],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost19",0,0,0, "redwoodtree.jpg",0,0,0,0, [false], arrayall.arrayoaktree],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost20",0,0,0, "hooverdam.jpg",0,0,0,0, [false], arrayall.arrayredwoodtree],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost21",0,0,0, "eiffeltower.jpg",0,0,0,0, [false], arrayall.arrayhooverdam],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost22",0,0,0, "angelfalls.jpg",0,0,0,0, [false], arrayall.arrayeiffeltower],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost23",0,0,0, "mteverest.jpg",0,0,0,0, [false], arrayall.arrayangelfalls],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost24",0,0,0, "ganymed.jpg",0,0,0,0, [false], arrayall.arraymteverest],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost25",0,0,0, "nereid.jpg",0,0,0,0, [false], arrayall.arrayganymed],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost26",0,0,0, "pluto.jpg",0,0,0,0, [false], arrayall.arraynereid],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost27",0,0,0, "mars.jpg",0,0,0,0, [false], arrayall.arraypluto],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost28",0,0,0, "earth.jpg",0,0,0,0, [false], arrayall.arraymars],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost29",0,0,0, "uranus.jpg",0,0,0,0, [false], arrayall.arrayearth],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost30",0,0,0, "jupiter.jpg",0,0,0,0, [false], arrayall.arrayuranus],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost31",0,0,0, "alphacentauric.jpg",0,0,0,0, [false], arrayall.arrayjupiter],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost32",0,0,0, "alphacentaurib.jpg",0,0,0,0, [false], arrayall.arrayalphacentauric],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost33",0,0,0, "sun.jpg",0,0,0,0, [false], arrayall.arrayalphacentaurib],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost34",0,0,0, "siriusa.jpg",0,0,0,0, [false], arrayall.arraysun],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost35",0,0,0, "regulus.jpg",0,0,0,0, [false], arrayall.arraysiriusa],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost36",0,0,0, "pollux.jpg",0,0,0,0, [false], arrayall.arrayregulus],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost37",0,0,0, "arcturus.jpg",0,0,0,0, [false], arrayall.arraypollux],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost38",0,0,0, "aldebaran.jpg",0,0,0,0, [false], arrayall.arrayarcturus],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost39",0,0,0, "rigel.jpg",0,0,0,0, [false], arrayall.arrayaldebaran],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost40",0,0,0, "gacrux.jpg",0,0,0,0, [false], arrayall.arrayrigel],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost41",0,0,0, "deneb.jpg",0,0,0,0, [false], arrayall.arraygacrux],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost42",0,0,0, "pistolstar.jpg",0,0,0,0, [false], arrayall.arraydeneb],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost43",0,0,0, "v382carinae.jpg",0,0,0,0, [false], arrayall.arraypistolstar],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost44",0,0,0, "v354cephei.jpg",0,0,0,0, [false], arrayall.arrayv382carinae],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost45",0,0,0, "solarsystemskuiperbelt.jpg",0,0,0,0, [false], arrayall.arrayv354cephei],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost46",0,0,0, "homunculusnebula.jpg",0,0,0,0, [false], arrayall.arraysolarsystemskuiperbelt],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost47",0,0,0, "stingraynebula.jpg",0,0,0,0, [false], arrayall.arrayhomunculusnebula],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost48",0,0,0, "solarsystemsoortcloud.jpg",0,0,0,0, [false], arrayall.arraystingraynebula],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost49",0,0,0, "catseyenebula.jpg",0,0,0,0, [false], arrayall.arraysolarsystemsoortcloud],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost50",0,0,0, "ringnebula.jpg",0,0,0,0, [false], arrayall.arraycatseyenebula],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost51",0,0,0, "helixnebula.jpg",0,0,0,0, [false], arrayall.arrayringnebula],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost52",0,0,0, "crabnebula.jpg",0,0,0,0, [false], arrayall.arrayhelixnebula],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost53",0,0,0, "pillarsofcreation.jpg",0,0,0,0, [false], arrayall.arraycrabnebula],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost54",0,0,0, "greatorionnebula.jpg",0,0,0,0, [false], arrayall.arraypillarsofcreation],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost55",0,0,0, "solarsystemssolarneighborhood.jpg",0,0,0,0, [false], arrayall.arraygreatorionnebula],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost56",0,0,0, "omegacentauri.jpg",0,0,0,0, [false], arrayall.arraysolarsystemssolarneighborhood],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost57",0,0,0, "m54globularcluster.jpg",0,0,0,0, [false], arrayall.arrayomegacentauri],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost58",0,0,0, "tarantulanebula.jpg",0,0,0,0, [false], arrayall.arraym54globularcluster],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost59",0,0,0, "sagittariusdwarfgalaxy.jpg",0,0,0,0, [false], arrayall.arraytarantulanebula],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost60",0,0,0, "smallmagellaniccloud.jpg",0,0,0,0, [false], arrayall.arraysagittariusdwarfgalaxy],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost61",0,0,0, "largemagellaniccloud.jpg",0,0,0,0, [false], arrayall.arraysmallmagellaniccloud],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost62",0,0,0, "ngc7714.jpg",0,0,0,0, [false], arrayall.arraylargemagellaniccloud],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost63",0,0,0, "triangulumgalaxy.jpg",0,0,0,0, [false], arrayall.arrayngc7714],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost64",0,0,0, "blackeyegalaxy.jpg",0,0,0,0, [false], arrayall.arraytriangulumgalaxy],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost65",0,0,0, "milkywaygalaxy.jpg",0,0,0,0, [false], arrayall.arrayblackeyegalaxy],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost66",0,0,0, "andromedagalaxy.jpg",0,0,0,0, [false], arrayall.arraymilkywaygalaxy],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost67",0,0,0, "ngc1232.jpg",0,0,0,0, [false], arrayall.arrayandromedagalaxy],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost68",0,0,0, "virgoa.jpg",0,0,0,0, [false], arrayall.arrayngc1232],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost69",0,0,0, "cdgalaxyngc4889.jpg",0,0,0,0, [false], arrayall.arrayvirgoa],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost70",0,0,0, "localgalacticgroup.jpg",0,0,0,0, [false], arrayall.arraycdgalaxyngc4889],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost71",0,0,0, "ic1101.jpg",0,0,0,0, [false], arrayall.arraylocalgalacticgroup],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost72",0,0,0, "virgogalacticgroup.jpg",0,0,0,0, [false], arrayall.arrayic1101],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost73",0,0,0, "localgalacticsupercluster.jpg",0,0,0,0, [false], arrayall.arrayvirgogalacticgroup],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit++],0, "idcost74",0,0,0, "entireuniverse.jpg",0,0,0,0, [false], arrayall.arraylocalgalacticsupercluster],
    [0,0,costall[nextunit], pourall[nextunit], [0], apsall[nextunit],0, "idcost75",0,0,1, "blank.jpg", "blank",0,0, "blank", [false], arrayall.arrayentireuniverse]
];

arrayInitializeINI();

function setAll() {
    for (var x = 0; x < 75; x++) {
        var thatname = replaceAll("\'", "", replaceAll(' ', '', arrayNames[x]));
        localStorage.setItem(encrypt('co' + thatname), encryptValue(arUnit[x][4].toString()));
        localStorage.setItem(encrypt('co' + thatname + 'Cost'), encryptValue(arUnit[x][2].toString()));
    }
    setLocals();
    setAchivs();
    var savedgame = {};
    for (var loc in localStorage) savedgame[loc] = (loc != "savedgame") ? localStorage[loc] : savedgame[loc];
    localStorage.setItem("savedgame", JSON.stringify(savedgame));
}

function forExport() {
    $('#export').show();
    doc.getElementById('forexporttext').value = localStorage.getItem("savedgame");
}

function forImport() {
    if (doc.getElementById('forimporttext').value != "") {
        var data = JSON.parse(doc.getElementById('forimporttext').value);
        if (data["gameVersion"] == null){
            gritter('<span style="color:#ff0000;">Error</span>', 'Sorry, but any save made under <span style="color:#00ffff;">v1.8</span> are not supported anymore.');
        }
        else{
            for (var loc in data)
                if (decrypt(loc) != "savedgame") localStorage.setItem(loc, data[loc]);
            localStorage.setItem('savedgame', JSON.stringify(data));
            window.location.reload();
        }
    }
}

function setLocals() {
    localStorage.setItem("gameVersion",gameVersion.toString());
    localStorage.setItem("audioMute", audioMute.toString());
    localStorage.setItem(encrypt('cototalAtome'), encryptValue(totalAtome.toString()));
    localStorage.setItem(encrypt('coatomepersecond'), encryptValue(atomepersecond.toString()));
    localStorage.setItem(encrypt('coallupgrades'), encrypt(JSON.stringify(upgradeAll)));
    localStorage.setItem(encrypt('meters'), encryptValue(totalsizeM.toString()));
    localStorage.setItem(encrypt('kilometers'), encryptValue(totalsizeK.toString()));
    localStorage.setItem(encrypt('light-years'), encryptValue(totalsizeL.toString()));
    localStorage.setItem(encrypt('specials'), encrypt(JSON.stringify(allspec)));
    localStorage.setItem(encrypt('arrayall'), encrypt(JSON.stringify(arrayall)));
    localStorage.setItem(encrypt('apsall'), encrypt(JSON.stringify(apsall)));
    localStorage.setItem(encrypt('bodystyle'), encrypt(doc.getElementById('body').style.cssText));
    localStorage.setItem(encrypt('twinkling'), encrypt(doc.getElementById('twinkling').style.display));
    localStorage.setItem(encrypt('stars'), encrypt(doc.getElementById('stars').style.display));
    localStorage.setItem(encrypt('atomsaccu'), encryptValue(atomsaccu.toString()));
    localStorage.setItem(encrypt('atomsinvest'), encryptValue(atomsinvest.toString()));
    localStorage.setItem(encrypt('bonusinvest'), encryptValue(bonusinvest.toString()));
    localStorage.setItem(encrypt('specialsbought'), encryptValue(specialsbought.toString()));
    localStorage.setItem(encrypt('upgradesbought'), encryptValue(upgradesbought.toString()));
    localStorage.setItem(encrypt('timeplayed'), encryptValue(timeplayed.toString()));
    localStorage.setItem(encrypt('arUnit'), encrypt(JSON.stringify(arUnit)));
    localStorage.setItem(encrypt('arMulti'), encrypt(JSON.stringify(arMulti)));
    localStorage.setItem(encrypt('noti'), encrypt(noti.toString()));
    localStorage.setItem('constel2', constel2.toString());
    localStorage.setItem(encrypt('pace'), encrypt(paceToOn.toString()));
    localStorage.setItem(encrypt('totalUnit'), encryptValue(totalunit.toString()));
    localStorage.setItem(encrypt("prestige"),encryptValue(prestige.toString()));
    localStorage.setItem(encrypt("Px"),encryptValue(Px.toString()));
    localStorage.setItem(encrypt("Py"),encryptValue(Py.toString()));
    localStorage.setItem("tickspeed",tickspeed.toString());
}

function setAchivs(){
    localStorage.setItem(encrypt("achivs"),encrypt(JSON.stringify(allachiUnit)));
    localStorage.setItem(encrypt("achievementsUnlocked"),encrypt(JSON.stringify(achievementsUnlocked)));
}

function achiINISecondTime(){
     for (var x = 0;x<arraySectionNames.length;x++){
        document.getElementById('achievements').innerHTML += "<div class='row'><div class='col-lg-12 achisection' id='"+arraySectionNames[x]+"'><div class='achisectionNames'>"+cntype(arraySectionNames[x])+"</div><div class='row'><div class='achiInfo' id='info"+(x+1)+"'></div></div><div class='row' id='"+arraySectionNames[x]+x+"'></div></div></div>";
        var z;
        switch (arraySectionNames[x]){
           case "Bonus":z=11;break;
           case "Special":z=5;break;
           case "Achievement":z=6;break;
           default:z=19;break;
          }
        var n = doc.getElementById(arraySectionNames[x]+x);
        for (var y = 0;y<z;y++)
        {   
            if (achievementsUnlocked[x][y] == 0) n.innerHTML += "<div class='oneachi col-lg-1 col-md-2 col-sm-2 col-xs-3' id='achiv"+(x+1).toString()+arAlpha[y]+"'><div onmouseover='getachiInfoLock("+(x+1)+")' onmouseleave='getachiInfosNo("+(x+1)+")' class='center4'><i class='fa fa-lock'></i></div></div>";
            else {
                var c;
                switch(x){
                    case 11:c=arraybonusRec[y];break;
                    case 12:c=arrayspecRec[y];break;
                    case 13:c=arrayachiRec[y];break;
                    case 14:c=arrayachiesRec[y];break;
                    default:c=arrayachiRec[y];break;
                }
                n.innerHTML += "<div class='oneachi col-lg-1 col-md-2 col-sm-2 col-xs-3' id='achiv"+(x+1).toString()+arAlpha[y]+"'><img style='border:1px ridge black;' onmouseover='getachiInfos("+(x+1)+","+y+","+c+")' onmouseleave='getachiInfosNo("+(x+1)+")' height='84' width='84' src='achivs/"+(x+1)+arAlpha[y]+".jpg'></div>";
            }
        }
    }
}

function tickchanged(){tickspeed = doc.getElementById("tickspeed").value;
        clearInterval(inter1); // stop the setInterval()
        inter1 = setInterval(function() {
    if (doc.readyState === "complete") {
        if (atomepersecond > 0) {
            totalAtome += (atomepersecond * prestige) / ((1000/gameSpeed)/tickspeed);
            atomsaccu += (atomepersecond * prestige) / ((1000/gameSpeed)/tickspeed);
            actualiser();
            checkspec();
        }
        noclick();
    }
}, tickspeed)}

function checkAll() {

    if (localStorage.getItem("savedgame") == null){
        localStorage.setItem("gameVersion",gameVersion.toString());
    }

    if (localStorage.getItem('audioMute') == null){
        localStorage.setItem("audioMute",audioMute.toString());
    }
    audioMute = localStorage.getItem('audioMute');
    if (audioMute == 'true'){
        audioMute = true
        document.getElementById('background_audio').muted = true;
        document.getElementById('muteButton').src = 'music-muted.png';
    }
    else if(audioMute == 'false'){
        audioMute = false
    }

    if (localStorage.getItem('justReset') != null){
        prestige = decryptValue(localStorage.getItem(encrypt("prestige")));
        doc.getElementById('Pres').innerHTML = prestige.toFixed(2);
        Px = decryptValue(localStorage.getItem(encrypt("Px")));
        Py = decryptValue(localStorage.getItem(encrypt("Py")));
        doc.getElementById('presimage').width = Px;
        doc.getElementById('presimage').height = Py;
        doc.getElementById('blackholeW').innerHTML = prestige.toFixed(2);
        achievementsUnlocked = JSON.parse(decrypt(localStorage.getItem(encrypt("achievementsUnlocked"))));
        setLocals();
        achiINISecondTime();
        localStorage.removeItem('justReset')
    }

    // version 1.82 - begin

    if (localStorage.getItem("gameVersion") == null){
        localStorage.clear();
        localStorage.setItem("gameVersion",gameVersion.toString());
        location.reload();
    }

    // version 1.82 - end

    // version 1.8- begin

    if (localStorage.getItem("tickspeed") == null){
        localStorage.setItem("tickspeed",tickspeed.toString());
    }
    else {
        tickspeed = localStorage.getItem("tickspeed");
        doc.getElementById("tickspeed").value = tickspeed;
        tickchanged();
    }

    if (localStorage.getItem('constel2') == null) localStorage.setItem('constel2', constel2.toString());
    else {
        constel2 = localStorage.getItem('constel2');
        if (constel2 == 1) {
            doc.getElementById('constelOn').style.opacity = 1;
            doc.getElementById('constelOff').style.opacity = 0.5;
            doc.getElementById("experience").style.display = "block";
        } else {
            doc.getElementById('constelOn').style.opacity = 0.5;
            doc.getElementById('constelOff').style.opacity = 1;
            doc.getElementById("experience").style.display = "none";
        }
    }
    
    // version 1.8 - end

    // version 1.6- begin

    if (localStorage.getItem(encrypt("prestige")) == null){
        localStorage.setItem(encrypt("prestige"),encryptValue(prestige.toString()));
        localStorage.setItem(encrypt("Px"),encryptValue(Px.toString()));
        localStorage.setItem(encrypt("Py"),encryptValue(Py.toString()));
    }
    else {prestige = decryptValue(localStorage.getItem(encrypt("prestige")));doc.getElementById('Pres').innerHTML = prestige.toFixed(2);Px = decryptValue(localStorage.getItem(encrypt("Px")));Py = decryptValue(localStorage.getItem(encrypt("Py")));
doc.getElementById('presimage').width = Px;doc.getElementById('presimage').height = Py;doc.getElementById('blackholeW').innerHTML = prestige.toFixed(2);}
    
    // version 1.6- end

    // version 1.55 begin

    if (localStorage.getItem(encrypt("achivs")) == null) {achiIni(); localStorage.setItem(encrypt("achivs"),encrypt(JSON.stringify(allachiUnit))); localStorage.setItem(encrypt("achievementsUnlocked"),encrypt(JSON.stringify(achievementsUnlocked)))}
    else {
          allachiUnit = JSON.parse(decrypt(localStorage.getItem(encrypt("achivs"))));
          if (localStorage.getItem(encrypt("achievementsUnlocked")) != null){
                achievementsUnlocked = JSON.parse(decrypt(localStorage.getItem(encrypt("achievementsUnlocked"))));
          }
          achiINISecondTime();
    }

    //end

    // Version 1.52 begin

    if (localStorage.getItem(encrypt('specialshtml')) != null) localStorage.removeItem(encrypt('specialshtml'));
    if (localStorage.getItem(encrypt('specialhtml')) != null) localStorage.removeItem(encrypt('specialhtml'));
    if (localStorage.getItem(encrypt('bonusinvest')) == null) localStorage.setItem(encrypt('bonusinvest'), encryptValue(bonusinvest.toString()));
    else {
        bonusinvest = decryptValue(localStorage.getItem(encrypt('bonusinvest')));
        doc.getElementById('bonusinvested').innerHTML = rounding(bonusinvest, false,0);
    }

    // end

    // Version 1.46 begin

    if (localStorage.getItem(encrypt('noti')) == null) localStorage.setItem(encrypt('noti'), encrypt(noti.toString()));
    else {
        noti = JSON.parse(decrypt(localStorage.getItem(encrypt('noti'))));
        if (noti) {
            doc.getElementById('notion').style.opacity = 1;
            doc.getElementById('notioff').style.opacity = 0.5;
        } else {
            doc.getElementById('notion').style.opacity = 0.5;
            doc.getElementById('notioff').style.opacity = 1;
        }
    }

    // end

    if (localStorage.getItem(encrypt('arMulti')) == null && localStorage.getItem(encrypt('prestige')) != null){
        setLocals();
        setAchivs();
        prestige = decryptValue(localStorage.getItem(encrypt("prestige")));
        Px = decryptValue(localStorage.getItem(encrypt("Px")));
        Py = decryptValue(localStorage.getItem(encrypt("Py")));
    }
    else if (localStorage.getItem(encrypt('arMulti')) == null) {
        localStorage.clear();
        setLocals();
        setAchivs();
    } else {
        totalAtome = decryptValue(localStorage.getItem(encrypt("cototalAtome")));
        atomepersecond = Number(decryptValue(localStorage.getItem(encrypt("coatomepersecond"))));
        if (atomepersecond > 0) actualiser();
        timeplayed = decryptValue(localStorage.getItem(encrypt('timeplayed')));
        atomsaccu = decryptValue(localStorage.getItem(encrypt('atomsaccu')));
        atomsinvest = decryptValue(localStorage.getItem(encrypt('atomsinvest')));
        doc.getElementById('atomsinvest').innerHTML = rounding(atomsinvest, false,0);
        specialsbought = decryptValue(localStorage.getItem(encrypt('specialsbought')));
        doc.getElementById('specialsbought').innerHTML = rounding(specialsbought, false,0);
        upgradesbought = decryptValue(localStorage.getItem(encrypt('upgradesbought')));
        doc.getElementById('upgradesbought').innerHTML = rounding(upgradesbought, false,0);
        doc.getElementById('twinkling').style.display = decrypt(localStorage.getItem(encrypt('twinkling')));
        doc.getElementById('stars').style.display = decrypt(localStorage.getItem(encrypt('stars')));
        if (doc.getElementById('stars').style.display != "none" && doc.getElementById('twinkling').style.display != "none") {
            doc.getElementById('starsoff').style.opacity = "0.5";
            doc.getElementById('starson').style.opacity = "1";
        }
        doc.getElementById('body').style.cssText = decrypt(localStorage.getItem(encrypt('bodystyle')));
        checkSelectBack();
        allspec = JSON.parse(decrypt(localStorage.getItem(encrypt("specials"))));
        arrayall = JSON.parse(decrypt(localStorage.getItem(encrypt("arrayall"))));
        apsall = JSON.parse(decrypt(localStorage.getItem(encrypt("apsall"))));
        totalsizeM = new BigNumber(decryptSize(localStorage.getItem(encrypt('meters'))));
        doc.getElementById('meters').innerHTML = totalsizeM + ' 米';
        totalsizeK = new BigNumber(decryptSize(localStorage.getItem(encrypt('kilometers'))));
        doc.getElementById('kilometers').innerHTML = rounding(totalsizeK, false,0) + ' 千米';
        totalsizeL = new BigNumber(decryptSize(localStorage.getItem(encrypt('light-years'))));
        doc.getElementById('light-years').innerHTML = rounding(totalsizeL, false,0) + ' 光年';
        upgradeAll = JSON.parse(decrypt(localStorage.getItem(encrypt('coallupgrades'))));
        arUnit = JSON.parse(decrypt(localStorage.getItem(encrypt("arUnit"))));
        for (var aa in arUnit) if (arUnit[aa][18] != "0") arUnit[aa][18] = "0";
        for (var eachspec in allspec)
            if ((arUnit[eachspec][16] == true || arrayNames[eachspec] == "quantum foam") && allspec[eachspec].done == false) doc.getElementById('specials').innerHTML += '<div id="spec' + eachspec + '" class="col-lg-4 col-md-4 col-sm-6 col-xs-12" onclick="specialclick(' + eachspec + ')"><img id="imgspec' + eachspec + '" class="imagesSpecs" src="specs/' + eachspec + '.jpg"><div class="shadow"></div><div class="specinfos"><p class="specnames">' + allspec[eachspec].name + '</p><p class="specdesc">' + allspec[eachspec].desc + '</p><p class="speccost"><img src="images/atom.png">' + rounding(allspec[eachspec].cost, false,0) + '</p><p class="specresult">' + cnname(arrayNames[eachspec]) + ' 数量是 100的倍数的话更有效</p></div></div>';
            else if (allspec[eachspec].done == false) doc.getElementById('specials').innerHTML += '<div id="spec' + eachspec + '" class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><div class="center3"><i class="fa fa-lock fa-2x"></i></div></div>';
        if (localStorage.getItem(encrypt('totalUnit')) == null) {
            totalunit = 0;
            for (var y = 0; y < 75; y++) totalunit += Number(arUnit[y][4]);
            localStorage.setItem(encrypt('totalUnit'), encryptValue(totalunit.toString()));
        } else {
            totalunit = Number(decryptValue(localStorage.getItem(encrypt('totalUnit'))));
            doc.getElementById('totalunits').innerHTML = rounding(totalunit, false,0);
        }
        arMulti = JSON.parse(decrypt(localStorage.getItem(encrypt('arMulti'))));
        upgradeIni();
        prestige = decryptValue(localStorage.getItem(encrypt("prestige")));
        Px = decryptValue(localStorage.getItem(encrypt("Px")));
        Py = decryptValue(localStorage.getItem(encrypt("Py")));
        for (var x = 0; x < 75; x++)
            for (var y = 1; y < 23; y++) {
                if (y == 21 && doc.getElementById("tblRowUpgrade" + x + "tblCellUpgrade" + 0).style.backgroundImage != "") {
                    doc.getElementById("tblRowUpgrade" + x + "tblCellUpgrade" + y).className = "multi";
                    doc.getElementById("tblRowUpgrade" + x + "tblCellUpgrade" + y).innerHTML = "<p>原子每秒产量 X " + Number(arMulti[x]).toFixed(2) + "</p>";
                }
                if (y == 22 && doc.getElementById("tblRowUpgrade" + x + "tblCellUpgrade" + 0).style.backgroundImage != "") {
                    doc.getElementById("tblRowUpgrade" + x + "tblCellUpgrade" + y).className = "upTotal";
                    var upTotal = 0;
                    for (var a in upgradeAll[x])
                        if (upgradeAll[x][a] == 2) upTotal++;
                    doc.getElementById("tblRowUpgrade" + x + "tblCellUpgrade" + 22).innerHTML = '<p>' + upTotal + ' / 20</p>';
                }
                item = doc.getElementById("tblRowUpgrade" + x + "tblCellUpgrade" + y);
                itemBase = doc.getElementById("tblRowUpgrade" + x + "tblCellUpgrade" + 0);
                if (item != null && itemBase != null)
                if (upgradeAll[x][y] == 1) {
                    doc.getElementById("tblRowUpgrade" + x).className = "tablerow rowOn";
                    item.style.opacity = "1";
                    item.className += " hoverbox";
                    item.innerHTML = "<img class='upgrades img-responsive' data-toggle='tooltip' data-html='true' data-placement='right' title='<p>效果 : " + "+" + arrayToolTip[y - 1] + "% 原子每秒产量</p><p>消耗 : " + rounding(bonusCost[x][y - 1], false,0) + " 原子</p>'" + " src='images/atombonus2.png'/>";
                    item.style.cursor = "pointer";
                    $('#tblRowUpgrade' + x + "tblCellUpgrade" + y).attr('onclick', 'upgrade(' + x + "," + y + ')');
                    itemBase.className = " highwidth";
                    itemBase.innerHTML = '</div><p>' + cnname(arrayNames[x]) + '</p>';
                    itemBase.style.backgroundImage = "url('imagesFull/" + replaceAll(' ', '-', arrayNames[x]).replace("'", '') + ".jpg')";
                } else if (upgradeAll[x][y] == 2) {
                    doc.getElementById("tblRowUpgrade" + x).className = "tablerow rowOn";
                    item.style.opacity = "0.75";
                    item.style.cursor = "default";
                    item.innerHTML = "<img src='images/atombonus1.png'/>";
                    itemBase.className = " highwidth";
                    itemBase.innerHTML = '</div><p>' + cnname(arrayNames[x]) + '</p>';
                    itemBase.style.backgroundImage = "url('imagesFull/" + replaceAll(' ', '-', arrayNames[x]).replace("'", '') + ".jpg')";
                }
            }
        }
        
    achivSetPercent();

    var xx = "";
    var x = 1;

    for (var y = 0; y < 75; y++) {
        var thatname = replaceAll("\'", "", replaceAll(' ', '', arrayNames[y]));
        if (doc.getElementById("idcost" + xx) != null){doc.getElementById("idcost" + xx).innerHTML = rounding(getUnitPromoCost(y), false,0);}
        if (localStorage.getItem(encrypt("co" + thatname)) == null) {
            localStorage.setItem(encrypt("co" + thatname), encryptValue(arUnit[y][4].toString()));
        } else {
            arUnit[y][4] = JSON.parse("[" + decryptValue(localStorage.getItem(encrypt("co" + thatname))) + "]");
        }
        if (arUnit[y][4] > 0 || arUnit[y][16] == true) {
            doc.getElementById("tc" + x).innerHTML = "<a><div><input type='button' onmouseover='seeUnit(" + (x - 1).toString() + ")' onclick='calculsclick(" + (x - 1).toString() + ")' style='background: url(images/" + thatname + ".jpg" + ");'/></div></a>" + "<div class='divinfo'><div><a class='linktotop' href='##'><p onclick='seeUnit(" + (x - 1).toString() + ")'  id='" + "idp" + x + "' class='name'>" + cnname(arrayNames[x - 1]) + " : " + arUnit[y][4] + "</p></a><br><img alt='atom' src='images/atom.png'/><p id='" + "idcost" + xx + "' class='cost'>" + rounding(getUnitPromoCost(y), false,0) + "</p><button class='btn btn-default btn-xs littlex10' style='outline:0;' type='button' onmouseover='seeUnit(" + (x - 1).toString() + ")' onclick='tox10(" + (x - 1).toString() + ")'>X10</button><button class='btn btn-default btn-xs littlemax' style='outline:0;' type='button' onmouseover='seeUnit(" + (x - 1).toString() + ")' onclick='tomax(" + (x - 1).toString() + ")'>MAX</button></div></div>";
            if (localStorage.getItem(encrypt("co" + thatname)) == null) localStorage.setItem(encrypt("co" + thatname), encryptValue(arUnit[y][4].toString()));
            else {
                arUnit[y][4] = JSON.parse("[" + decryptValue(localStorage.getItem(encrypt("co" + thatname))) + "]");
                doc.getElementById("idp" + x).innerHTML = cnname(arrayNames[x - 1]) + " : " + arUnit[y][4];
                for (var i = 0; i < arUnit[y][4]; i++) allprogress(x - 1);
            }
            if (localStorage.getItem(encrypt("co" + thatname + "Cost")) == null) localStorage.setItem(encrypt("co" + thatname + "Cost"), encryptValue(arUnit[y][2].toString()));
            else {
                arUnit[y][2][0] = JSON.parse("[" + decryptValue(localStorage.getItem(encrypt("co" + thatname + "Cost"))) + "]");
                doc.getElementById("idcost" + xx).innerHTML = rounding(getUnitPromoCost(y), false,0);
            }
        }
        x++;
        if (xx == "") xx = 1;
        xx++;
    }
    doc.getElementById('idImage').innerHTML = '<img class=\'img-responsive\' src="imagesFull/quantum-foam.jpg">';
    doc.getElementById('idInfos').innerHTML = '<p>量子泡沫</p><div><p>' + description[0] + '</p></div><span>10<SUP>-35</SUP> 米</span><button class="btn btn-default btn-xs" style="outline:0;" type="button" onclick="tox10(0)">X10</button><button class="btn btn-default btn-xs" style="outline:0;" type="button" onclick="tomax(0)">最大</button>';
}

function deleteAll() {
    backtoscreen();
    localStorage.clear();
    window.location.reload();
}

function backtoscreen() {
    $('#areyousure').hide();
}

function confirmDelete() {
    $('#areyousure').show();
}

function manualSave() {
    setAll();
    if (noti) gritter('游戏保存', '保存成功！', null, null, null);
}


var specQuanumfoam = {
    name: '半夏轮车过程',
    desc: '将纯光转换为物质。',
    done: false
};
var specNeutrino = {
    name: '中微子探测器',
    desc: '用于研究中微子的物理仪器。',
    done: false
};
var specPreon = {
    name: 'Rishon模型',
    desc: 'Preon模型中物质和反物质同样丰富。',
    done: false
};
var specElectroncore = {
    name: '粒子加速器',
    desc: '利用电磁感应来加速电子。',
    done: false
};
var specProton = {
    name: '质子自旋危机',
    desc: '检测质子的自旋配置。',
    done: false
};
var specUraniumnucleus = {
    name: '核裂变',
    desc: '的铀\的能力发现裂变（掰开）成较轻的元素和释放的结合能',
    done: false
};
var specGammaray = {
    name: '逆康普顿散射',
    desc: '带电粒子将其部分能量转移给光子',
    done: false
};
var specAngstrom = {
    name: '埃实验室',
    desc: '乌普萨拉大学的主要建筑群之一',
    done: false
};
var specCarbonnanotube = {
    name: '碳纳米芽',
    desc: '结合碳纳米管和球状富勒烯',
    done: false
};
var specCellmembrane = {
    name: '细胞内吞',
    desc: '细胞通过吞噬分子（如蛋白质）来吸收能量的过程。',
    done: false
};
var specLargestvirus = {
    name: '溶血循环',
    desc: '以噬菌体核酸整合入宿主细菌基因组为特征的病毒繁殖方法',
    done: false
};
var specWhitebloodcell = {
    name: '佩尔格 - 休特异常',
    desc: '遗传性疾病与常染色体显性遗传模式。',
    done: false
};
var specHumanhair = {
    name: '头发分析',
    desc: '头发样本的化学分析',
    done: false
};
var specGrainofsand = {
    name: '分级的沙子',
    desc: '用作清洁，准备和抛光的研磨剂',
    done: false
};
var specCoffeebean = {
    name: '小粒种咖啡',
    desc: '生产比其他主要商业种植咖啡品种更好的品尝咖啡',
    done: false
};
var specCup = {
    name: '老式的玻璃',
    desc: '老式眼镜通常具有宽边缘，从而释放饮料的味道。',
    done: false
};
var specHuman = {
    name: '超人文主义',
    desc: '大大增强人的智力，身体和心理能力。',
    done: false
};
var specGiantearthworm = {
    name: 'Criodrilus属蚯蚓',
    desc: '具有惊人的再生能力的蚯蚓物种。',
    done: false
};
var specOaktree = {
    name: ' 巨无霸橡树种子',
    desc: '据信在世界上最古老的橡树活了13000年',
    done: false
};
var specRedwoodtree = {
    name: '斯坦贝克的笔记',
    desc: '<i>“红木曾经被看见，留下痕迹或创造一个永远与你同在的愿景。”</i>',
    done: false
};
var specHooverdam = {
    name: '碾压混凝土',
    desc: '与传统混凝土具有相同成分但混合比例不同的混凝土的特殊混合物。',
    done: false
};
var specEiffeltower = {
    name: '埃伯特的文章',
    desc: '无论在巴黎哪里拍摄电影，艾菲尔铁塔都将在后台可见。',
    done: false
};
var specAngelfalls = {
    name: '天使瀑布',
    desc: '把安吉尔瀑布的名字命名为原来的土着派蒙语; 意思是“最深处的瀑布”',
    done: false
};
var specMteverest = {
    name: '希拉里 - 诺尔盖致敬',
    desc: '首次登山者的一个重要的贡献证实已经达到峰会。',
    done: false
};
var specGanymed = {
    name: '光曲线研究',
    desc: '研究得出结论，光曲线和偏振曲线之间的相关性与旋转角度有关。',
    done: false
};
var specNereid = {
    name: '强迫岁差',
    desc: '改变轴向旋转的方向。',
    done: false
};
var specPluto = {
    name: ' IAU分类',
    desc: '国际天文学联合会决定，冥王星应该归入同时创造的矮行星类别。',
    done: false
};
var specMars = {
    name: '火卫一火卫二的发现',
    desc: '火星有两个相对较小的自然季节，火卫一和迪莫斯，它们靠近地球轨道运行。',
    done: false
};
var specEarth = {
    name: '地球之歌',
    desc: '颂扬地球及其居民（包括动植物）的庆祝歌曲。',
    done: false
};
var specUranus = {
    name: '旅行2的访问',
    desc: '“旅行2”发现，天王星可见的南半球可以细分为两个区域：一个明亮的极地上限和黑色的赤道带',
    done: false
};
var specJupiter = {
    name: '克劳狄斯托勒密',
    desc: '建立一个基于行星和行星的地心行星模型来解释木星相对于地球的运动。',
    done: false
};
var specAlphacentaric = {
    name: '微弱的物体摄谱仪',
    desc: '使用FOS比邻星的检查似乎显示出一个伴侣一定距离轨道的证据。',
    done: false
};
var specAlphacentaurib = {
    name: '阿尔法半人马座B',
    desc: '围绕K型阿尔法序列星阿尔法半人马座B的太阳系外行星',
    done: false
};
var specSun = {
    name: '先进成分探测器',
    desc: '美国宇航局探索计划旨在做太阳能研究',
    done: false
};
var specSiriusA = {
    name: '小狗',
    desc: '小天狼星A的弱伴侣，被称为天狼星B，或亲切的“小狗”',
    done: false
};
var specRegulus = {
    name: '重力增亮',
    desc: '天文学现象，恒星旋转得如此之快以至于它具有可检测的扁球形。',
    done: false
};
var specPollux = {
    name: '雪莱的诗',
    desc: '\"<i>带来欢乐：温和的波吕克，无可挑剔</i>\"',
    done: false
};
var specArcturus = {
    name: '大角星流',
    desc: '星系协调一个曾经是球状星系或矮星系（包括附近明亮的星状大角星）的星系。',
    done: false
};
var specAldebaran = {
    name: '星际伴侣',
    desc: '奥尔德巴伦的径向速度的测量显示一个长周期径向速度振荡，意味着一个未知的亚恒星伴侣。',
    done: false
};
var specRigel = {
    name: '恒星脉动',
    desc: '恒星半径的波动会引起恒星光度的相应变化。',
    done: false
};
var specGacrux = {
    name: '富含钡',
    desc: 'Gacrux的气氛充满了柔软的银色金属碱土金属。',
    done: false
};
var specDeneb = {
    name: '夏季大三角',
    desc: '天文星群涉及在北半球\的天球的假想三角形，与牵牛星，天津四，和Vega其定义顶点。',
    done: false
};
var specPistolstar = {
    name: '手枪星云',
    desc: '包含由恒星喷射的大约10个太阳质量的电离气体。',
    done: false
};
var specV382carinae = {
    name: '南船座',
    desc: '更大的星座与星座船尾座（斯特恩）和贝拉（帆）一起。',
    done: false
};
var specV354cephei = {
    name: '渐近巨星分支',
    desc: '高度发展的低质量红色巨星，光度几乎与红色巨星一样高',
    done: false
};
var specSolarsystemskuiperbelt = {
    name: '柯伊伯悬崖',
    desc: '大型天体的数量增加了两倍，超过50个天文单位。',
    done: false
};
var specHomunculusnebula = {
    name: '恒星形成',
    desc: '在星际空间的分子云中的密集区域塌陷形成恒星的过程。',
    done: false
};
var specStingraynebula = {
    name: '平行光',
    desc: '光线是平行的，因此当它传播时，它的扩散最小。',
    done: false
};
var specSolarsystemsoortcloud = {
    name: '改进的牛顿动力学',
    desc: '牛顿重力定律的修改，以表明加速度与引力不成正比。',
    done: false
};
var specCatseyenebula = {
    name: '碰撞激发',
    desc: '将碰撞伴侣的平移能量转换为反应物质的内能的过程',
    done: false
};
var specRingNebula = {
    name: '禁止的机制',
    desc: '通过量子力学选择规则通常不允许名义上“禁止”能量跃迁的原子发射的谱线。',
    done: false
};
var specHelixnebula = {
    name: "阈值电离",
    desc: '多光子效应，其中原子被电离超过所需数量的光子。',
    done: false
};
var specCrabnebula = {
    name: '冲击波',
    desc: '传播干扰的类型。 它像一个普通的波浪一样携带能量，可以通过介质（固体，液体，气体或等离子体）传播。',
    done: false
};
var specPillarsofcreation = {
    name: '光致蒸发',
    desc: '当一颗行星由于高能光子和其他电磁辐射而剥离其大气（或大气的一部分）时的过程。',
    done: false
};
var specGreatorionnebula = {
    name: 'Jeans instability',
    desc: '在物理学上，牛仔裤的不稳定性导致了星际气体云团的崩溃和随后的恒星形成。',
    done: false
};
var specSolarNeighborhood = {
    name: '超新星核合成',
    desc: '在超新星内产生新的化学元素。',
    done: false
};
var specOmegacentauri = {
    name: '中等质量的黑洞',
    desc: '假设类黑洞质量在100到100万太阳质量范围内; 明显超过恒星黑洞。',
    done: false
};
var specM54 = {
    name: '动力摩擦',
    desc: '运动物体的动量和动能通过与周围物体的引力相互作用而损失。',
    done: false
};
var specTarantulanebula = {
    name: 'SN 1987A',
    desc: '在大麦哲伦星云的塔兰图拉星云外围的超新星。',
    done: false
};
var specSagittariusdwarfgalaxy = {
    name: '恒星流',
    desc: '星系协会曾经是一个星系，这个星系曾经是一个球状星系团或矮星系，现在已经被潮汐力量撕裂并沿着它的轨道延伸。',
    done: false
};
var specSmallmagellaniccloud = {
    name: '小麦哲伦星云',
    desc: '小麦哲伦云分成两部分，主要部分后面有一小部分。',
    done: false
};
var specLargemagellaniccloud = {
    name: '麦哲伦桥',
    desc: '连接两个麦哲伦云的中性氢流。 它主要是一种低金属含量的气体，虽然里面有几颗星星。',
    done: false
};
var specNgc7714 = {
    name: 'OB协会',
    desc: 'OB星是炎热的，光谱类型O或早型B的大质量恒星，形成松散组织的称为OB关联的组。',
    done: false
};
var specTriangulumgalaxy = {
    name: '分子云',
    desc: '密度和大小允许形成分子的星际云的类型，最常见的是分子氢（H 2）。',
    done: false
}
var specBlackeyegalaxy = {
    name: '逆行',
    desc: '逆行运动的运动方向与其他运动方向相反，与直行或前进运动相反。',
    done: false
};
var specMilkywaygalaxy = {
    name: '暗物质晕',
    desc: '一个星系的假想成分，包围着星系盘，并延伸到可见星系的边缘之外。',
    done: false
};
var specAndromedagalaxy = {
    name: '仙女座 - 银河系相撞',
    desc: '当两个星系相撞时，其圆盘上的氢被压缩，产生强烈的恒星形成。',
    done: false
};
var specNgc1232 = {
    name: 'ESO 547-16',
    desc: 'NGC 1232的星系卫星。它被认为是螺旋臂异常弯曲的原因。',
    done: false
};
var specVirgoa = {
    name: '相对论喷流',
    desc: '极其强大的等离子射流，从某些活动星系的中心推测出大量物体出现',
    done: false
};
var specCdgalaxyngc4889 = {
    name: 'M-西格玛关系',
    desc: '星系中心恒星速度色散与超大质量黑洞质量的经验关系。',
    done: false
};
var specLocalgalacticgroup = {
    name: 'Sunyaev-Zel \\ dovich效应',
    desc: '高能电子通过逆康普顿散射使宇宙微波背景辐射失真。',
    done: false
};
var specIc1101 = {
    name: '星云指数和星团',
    desc: '包含5,386个物体; 统称为IC对象。',
    done: false
};
var specVirgogalacticgroup = {
    name: '星系团内介质',
    desc: '过热的等离子体在星系团的中心。',
    done: false
};
var specLocalgalacticsupercluster = {
    name: '银河丝',
    desc: '也被称为超级集群，长城，或“伟大的吸引力”，他们是整个宇宙中最大的已知的宇宙结构之一。',
    done: false
};
var specEntireuniverse = {
    name: '量子涨落',
    desc: '创建一个低能量的状态气泡，以光速和光速扩展 <i>之前横扫一切</i>.',
    done: false
};

var allspec = [specQuanumfoam, specNeutrino, specPreon, specElectroncore, specProton, specUraniumnucleus, specGammaray, specAngstrom, specCarbonnanotube, specCellmembrane, specLargestvirus, specWhitebloodcell, specHumanhair, specGrainofsand, specCoffeebean, specCup, specHuman, specGiantearthworm, specOaktree, specRedwoodtree, specHooverdam, specEiffeltower, specAngelfalls, specMteverest, specGanymed, specNereid, specPluto, specMars, specEarth, specUranus, specJupiter, specAlphacentaric, specAlphacentaurib, specSun, specSiriusA, specRegulus, specPollux, specArcturus, specAldebaran, specRigel, specGacrux, specDeneb, specPistolstar, specV382carinae, specV354cephei, specSolarsystemskuiperbelt, specHomunculusnebula, specStingraynebula, specSolarsystemsoortcloud, specCatseyenebula, specRingNebula, specHelixnebula, specCrabnebula, specPillarsofcreation, specGreatorionnebula, specSolarNeighborhood, specOmegacentauri, specM54, specTarantulanebula, specSagittariusdwarfgalaxy, specSmallmagellaniccloud, specLargemagellaniccloud, specNgc7714, specTriangulumgalaxy, specBlackeyegalaxy, specMilkywaygalaxy, specAndromedagalaxy, specNgc1232, specVirgoa, specCdgalaxyngc4889, specLocalgalacticgroup, specIc1101, specVirgogalacticgroup, specLocalgalacticsupercluster, specEntireuniverse];

function specCostIni() {
    var x = 0;
    for (var a in apsINI) {
        allspec[x]["cost"] = apsINI[a] * 1000000;
        x++;
    }
}
specCostIni();

var bignumber, highnumber, tabposition, tabUnits = [" million", " billion", " trillion", " quadrillion", " quintillion", " sextillion", " septillion", " octillion", " nonillion", " decillion", " undecillion", " duodecillion", " tredecillion", " quattuordecillion", " quindecillion", " sexdecillion", " septendecillion", " octodecillion", " novemdecillion", " vigintillion", " unvigintillion", " duovigintillion", " tresvigintillion", " quattuorvigintillion", " quinquavigintillion", " sesvigintillion", " septemvigintillion", " octovigintillion", " novemvigintillion", " trigintillion", " untrigintillion", " duotrigintillion", " duotrigintillion", " trestrigintillion", " quattuortrigintillion", " quinquatrigintillion", " sestrigintillion", " septentrigintillion", " octotrigintillion", " noventrigintillion", " quadragintillion"];

function rounding(p_nbr, p_atomepersecond,p_total) {
    var a = p_nbr;
    if (p_atomepersecond) a = p_nbr * prestige;
    highnumber = false;
    bignumber = 1000000;
    tabposition = -1;
    var unit;
    if (a >= bignumber) {
        highnumber = true;
        while (a >= bignumber) {
            bignumber *= 1000;
            tabposition++;
        }
        a /= (bignumber / 1000);
        unit = tabUnits[tabposition];
    } else unit = "";
    if (unit == undefined) {return "I can't handle that much";}
    var toround = (highnumber) ? (p_atomepersecond) ? 1000 : 100 : 10;
    var res;
    if (p_total == 1) res = Math.floor(a * toround) / toround;
    else res = Math.round(a * toround) / toround;
    return localeString(res) + " " + unit;
}

function localeString(x, sep, grp) {
    var sx = (''+x).split('.'), s = '', i, j;
    sep || (sep = ' '); // default seperator
    grp || grp === 0 || (grp = 3); // default grouping
    i = sx[0].length;
    while (i > grp) {
        j = i - grp;
        s = sep + sx[0].slice(j, i) + s;
        i = j;
    }
    s = sx[0].slice(0, i) + s;
    sx[0] = s;
    return sx.join('.')
}

function gritter(p_title, p_text, p_image, p_number, p_nom) {
    var texttoadd;
    var timetoadd;
    var classname = 'grit';
    if (p_number != null && p_nom != null) {
        texttoadd = p_number + " " + p_nom + "<br>" + p_text;
        timetoadd = 6000;
    } else {
        texttoadd = p_text;
        timetoadd = 10000;
    }
if (p_image != null)
    classname = 'achi';

    $.gritter.add({
        title: p_title,
        text: texttoadd,
        image: p_image,
        sticky: false,
        time: timetoadd,
        class_name: classname,
        before_open: function() {},
        after_open: function(e) {},
        before_close: function(e, manual_close) {},
        after_close: function() {}
    });
}

function getThatSize(that){
    switch(true){
        case (that < 19):return "meters";
        case (that < 47):return "kilometers";
        default:return "light-years";
    }
}

function seeUnit(that) {
    if (arUnit[that][16] || arrayNames[that] == "quantum foam") {
        var stringName = arrayNames[that].replace(/\s+/g, '-').toLowerCase();
        if (!(doc.getElementById("idImage").innerHTML.indexOf(stringName) > -1)) {
            if (stringName.toString().search('cat') == 0) stringName = 'cats-eye-nebula';
            doc.getElementById("idImage").innerHTML = "<img class='img-responsive' src='imagesFull/" + stringName.toString() + ".jpg'/>";
            doc.getElementById("idInfos").childNodes[0].innerHTML = cnname(arrayNames[that]);
            doc.getElementById('idInfos').childNodes[1].childNodes[0].innerHTML = description[that];
            var thatnumeric = (that >= 16) ? '' : allNumerical[that];
            doc.getElementById('idInfos').childNodes[2].innerHTML = (thatnumeric != '') ? '10<SUP>' + thatnumeric + '</SUP>' + ' ' + getThatSize(that) : allMeasures[that] + ' ' + getThatSize(that);
            doc.getElementById('idInfos').childNodes[3].onclick = function() {
                tox10(that);
            };
            doc.getElementById('idInfos').childNodes[4].onclick = function() {
                tomax(that);
            };
        }
        allprogress(that);
    }
}

function tox10(that) {
    if (arUnit[that][16] || arrayNames[that] == "quantum foam")
        for (var y = 0; y < 10; y++) mainCalc(that);
}

function tomax(that) {
    if (arUnit[that][16] || arrayNames[that] == "quantum foam")
        while (totalAtome >= getUnitPromoCost(that)) mainCalc(that);
}

function mainCalc(that) {
    var unitDomain = getUnitDomain(that);
    if (totalAtome >= getUnitPromoCost(that)) {
        atomsinvest += Number(getUnitPromoCost(that));
        doc.getElementById('atomsinvest').innerHTML = rounding(atomsinvest, false,0);
        totalAtome -= getUnitPromoCost(that);
        arUnit[that][2] = Number(arUnit[that][2]) + (arUnit[that][2] * arUnit[that][3]) / 100;
        arUnit[that][4] = Number(arUnit[that][4]) + 1;
        atomepersecond += Number(arUnit[that][5]);
        doc.getElementById('totalunits').innerHTML = rounding(++totalunit, false,0);
        addsize(getThatSize(that), allMeasures[that]);
        allprogress(that);
        checkUpgrade(that);
        updateBonusAll();
        var achivBonus = achiCostPercent[unitDomain] + achiCostPercent[14] + achiCostPercent[12] + achiCostPercent[11]
        var unitPromoCostNext = arUnit[that][2]-((arUnit[that][2]/100)*achivBonus);

        doc.getElementById("atomepersecond").innerHTML = rounding(atomepersecond, true,0) + " 原子/秒";
        if (doc.getElementById("idp"+(that+1)) != null && doc.getElementById(arUnit[that][7]) != null) {
            doc.getElementById("idp"+(that+1)).innerHTML = cnname(arrayNames[that]) + " : " + arUnit[that][4];
            doc.getElementById(arUnit[that][7]).innerHTML = rounding(unitPromoCostNext, false,0);
        }
        var last = true;
        if (arUnit[that][10] != 1)
            if (arUnit[that][4] >= 1)
                if (doc.getElementById("tc"+(that+2)).innerHTML.indexOf('atom') == -1) {
                    last = false;
                    var number = 1 + that++;
                    var classforname = (arrayNames[number] == "sagittarius dwarf galaxy") ? "namesagi" : "name";
                    doc.getElementById("tc"+(that+1)).innerHTML = "<a><div><input type='button' onmouseover='seeUnit(" + that + ")' onclick='calculsclick(" + that + ")' style='background: url(images/" + arUnit[that - 1][11] + ");'/></div></a>" + "<div class='divinfo'><div><a class='linktotop' href='##'><p onclick='seeUnit(" + that + ")' id='idp" + (that + 1) + "' class='" + classforname + "'>" + cnname(arrayNames[that]) + " : 0</p></a><br><img alt='atom' src='images/atom.png'/><p id='idcost" + (that + 1) + "' class='cost'>" + rounding(Number(getUnitPromoCost(that)), false,0) + "</p><button class='btn btn-default btn-xs littlex10' style='outline:0;' type='button' onmouseover='seeUnit(" + that + ")' onclick='tox10(" + that + ")'>X10</button><button class='btn btn-default btn-xs littlemax' style='outline:0;' type='button' onmouseover='seeUnit(" + that + ")' onclick='tomax(" + that + ")'>MAX</button></div></div>";
                    arUnit[that][16] = true;
                    var name = plurials(arrayNames[that]);
                    var desc = (name != "entire universes") ? "<p class='specresult'>" + name + " 是100倍更有效的</p></div>" : "<p class='specresult'>我敢扰乱这个宇宙吗？</br>-T·S·艾略特</p></div>";
                    doc.getElementById('spec' + arrayNames.indexOf(arrayNames[that])).innerHTML = "<img id='imgspec" + that + "' class='imagesSpecs' src='specs/" + that + ".jpg'/><div class='shadow'></div><div class='specinfos'><p class='specnames'>" + cnname(allspec[that].name) + "</p><p class='specdesc'>" + allspec[that].desc + "</p><p class='speccost'><img  src='images/atom.png'>" + rounding(allspec[that].cost, false,0) + "</p>" + desc;
                }
        checkAchievement(that,last);
    }
}


function allprogress(that) {
    var p_nomObjet = ("progressidp"+(that+1)) + arUnit[that][7];
    if (doc.getElementById(p_nomObjet) == null || doc.getElementById(p_nomObjet).id == "progressidpidcost" || doc.getElementById(p_nomObjet).id == 'progressidp75idcost75') {
        var aps = arUnit[that][17][1];
        var alltheprogress = "<div id='" + p_nomObjet + "' class=\'alltheprogress\'>";
        var max = 1;
        for (var x = 0; x < 19; x++) {
            alltheprogress += "<div class=\'allp2\'><p class=\'fraction\' id='fraction" + p_nomObjet + x + "'></p><p class=\'apsProgress\' id='idAps" + p_nomObjet + x + "'></p><progress max=" + max + " value='0' id='" + p_nomObjet + x + "'></progress></div>";

            if (arUnit[that][17].length < 20) arUnit[that][17].push(aps *= (x < 5) ? 2 : (x < 13) ? 3 : 5);
            arrayCheck[x] = false;

            if (max == 1 || max == 5) max *= 5;
            else max += (max == 25 || max == 50 || max == 75) ? 25 : (max < 500) ? 50 : 100;
        }
        doc.getElementById("idprogress").innerHTML = alltheprogress + "</div>";
    }
    for (var xx = 0; xx < 19; xx++) {
        var a = doc.getElementById(p_nomObjet + xx);
        if (arUnit[that][4] >= parseInt(a.getAttribute("max"))) {
            a.setAttribute("value", parseInt(a.getAttribute("max")));
            doc.getElementById("fraction" + p_nomObjet + xx).style.cssText = "color:lightskyblue;text-shadow:1px 1px black;";
            if (arrayCheck[xx] == 0) arrayCheck[xx] = 1;
        } else a.setAttribute("value", arUnit[that][4]);
        if (arrayCheck[xx] == 1 && doc.getElementById("idAps" + p_nomObjet + xx) != null) {
                if (xx > 0) arUnit[that][5] = arUnit[that][17][xx + 1];
                if (xx >= 0) doc.getElementById("idAps" + p_nomObjet + xx).innerHTML = rounding(arUnit[that][17][xx + 1], false,0) + " 原子每秒生产";
                arrayCheck[xx] = 2;
            }
        doc.getElementById("fraction" + p_nomObjet + xx).innerHTML = a.getAttribute("value") + "/" + a.getAttribute("max");
    }
}

function calculsclick(that) {
    tocalculate(that);
    noclick();
}

function tocalculate(that) {
    if (arUnit[that][16] || arrayNames[that] == "quantum foam") {
        mainCalc(that);
        actualiser();
    }
}
var arrayCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function plurials(p_unit) {
    var lastletter = p_unit.substring(p_unit.length - 1, p_unit.length);
    if (p_unit == "grain of sand"){
        p_unit = 'grains of sand'
    }
    return p_unit = ((lastletter == 'y' && p_unit != "gamma ray") || lastletter == 'i') ? p_unit.substring(0, p_unit.length - 1) + 'ies' : (lastletter == 's' && p_unit != "angel falls") ? p_unit.substring(0, p_unit.length - 1) + 'ses' : (lastletter == 'x') ? p_unit.substring(0, p_unit.length - 1) + 'xes' : (p_unit != "angel falls" && p_unit != "grains of sand") ? p_unit.substring(0, p_unit.length) + 's' : p_unit;
}

function replaceContentInContainer(matchClass, content) {
    var elems = doc.getElementsByTagName('*'),
        i;
    for (i in elems)
        if ((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) elems[i].style.cssText = content;
}

function addsize(p_type, p_varDim) {
    switch (p_type) {
        case "meters":totalsizeM = totalsizeM.add(p_varDim);setM();break;
        case "kilometers":totalsizeK = totalsizeK.add(p_varDim);setK();break;
        case "light-years":totalsizeL = totalsizeL.add(p_varDim);setL();break;
    }
    if (totalsizeM >= 1000) {totalsizeK = totalsizeK.add(1); totalsizeM = totalsizeM.subtract(1000); setM(); setK();}
    if (totalsizeK >= 9460730472580.8) {totalsizeL = totalsizeL.add(1); totalsizeK = totalsizeK.subtract(9460730472580.8); setK(); setL();}
}

function setM(){doc.getElementById("meters").innerHTML = totalsizeM + " 米";}
function setK(){doc.getElementById("kilometers").innerHTML = rounding(totalsizeK, false,0) + " 千米";}
function setL(){doc.getElementById("light-years").innerHTML = rounding(totalsizeL, false,0) + " 光年";}

var inter1 = setInterval(function() {
    if (doc.readyState === "complete") {
        if (atomepersecond > 0) {
            totalAtome += (atomepersecond * prestige) / ((1000/gameSpeed)/tickspeed);
            atomsaccu += (atomepersecond * prestige) / ((1000/gameSpeed)/tickspeed);
            actualiser();
            checkspec();
        }
        noclick();
    }
}, tickspeed);

        var secondinterval = setInterval(function() {
            doc.title = rounding(totalAtome, false,1).toString() + " 原子";
            doc.getElementById('atomsaccu').innerHTML = rounding(atomsaccu, false,0);
            doc.getElementById('timeplayed').innerHTML = (Math.round(timeplayed++/ 30) /
                    60).toFixed(1) + " 小时";
            doc.getElementById('presnbr').innerHTML = "<br>" + (calcPres() * 100).toFixed(0) + " % 原子每秒产量提升";
        }, 2000);

        var thirdinterval = setInterval(function() {
            setAll();
            if (noti) gritter('保存游戏', '宇宙正在膨胀', null, null, null);
        }, 300000); // 5 minutes

        function actualiser() {

            var total = rounding(totalAtome, false,1) + '';
            if (total != "I can't handle that much")
                total = (total.indexOf('.') == -1 && total.indexOf('ion') == -1 && totalAtome != 1) ? total.substring(0, total.length - 1) + '.0' : (total.indexOf('ion') != -1) ? parseFloat(total.substring(0, total.indexOf(' '))).toFixed(2) + total.substring(total.indexOf(' '), total.length) : total;
            doc.getElementById("nbrAtomes").innerHTML = total + " 原子";
            doc.getElementById("atomepersecond").innerHTML = rounding(atomepersecond, true,0) + " 原子/秒";
        }

        function checkspec() {
            var childs = doc.getElementById('specials').childNodes;
            for (var x = 0; x < childs.length; x++)
                if (childs[x] != null && childs[x] != undefined)
                    if (allspec[childs[x].id.substring(4, childs[x].id.length)]["cost"] <= totalAtome && childs[x].innerHTML.indexOf('fa-lock') == -1) {
                        childs[x].style.opacity = "0.9";
                        childs[x].style.cursor = "pointer";
                        childs[x].setAttribute("onclick", "specialclick(" + childs[x].id.substring(4, childs[x].id.length) + ")");
                    } else if (childs[x].innerHTML.indexOf('fa-lock') > -1) {
                childs[x].style.cursor = "default";
                childs[x].style.opacity = "0.1";
            } else {
                childs[x].style.cursor = "default";
                childs[x].style.opacity = "0.65";
            }
        }

        function noclick() {
            for (var x = 1; x < 76; x++) doc.getElementById("tc" + x).style.opacity = (totalAtome < Number(getUnitPromoCost(x-1)) || doc.getElementById("tc" + x).innerHTML.indexOf('fa-lock') > -1) ? "0.3" : "1";
        }

        function tableUpgradesConstruct() {
            for (var i = 0; i < 75; i++) {
                upgradeAll[i] = new Array(21);
                for (var ii = 1; ii < 21; ii++) upgradeAll[i][ii] = [0];
            }
        }

        function toTitleCase(str) {
            return (str != null) ? str.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }) : "";
        }

        function bonusAllTotal() {var total = 0; for (var x = 0; x < 75; x++) for (var y = 0; y < 20; y++) total += (upgradeAll[x][y] == 1) ? bonusCost[x][y] : 0; return rounding(total / 2, false,0);}

        function updateBonusAll() {
            $('#bonusAll').attr('data-original-title', bonusAllTotal() + " 原子");
        }

        function bonusshow() {
            $('#bonusAll').tooltip('show');
        }

        function checkUpgrade(that) {
            updateBonusAll();
            if (doc.getElementById("tblRowUpgrade" + that).className.indexOf("rowOn") == -1) {
                doc.getElementById("tblRowUpgrade" + that).className = "tablerow rowOn";
                doc.getElementById("tblRowUpgrade" + that + "tblCellUpgrade" + 0).innerHTML = '</div><p>' + cnname(arrayNames[that]) + '</p>';
                doc.getElementById("tblRowUpgrade" + that + "tblCellUpgrade" + 0).style.backgroundImage = "url('imagesFull/" + replaceAll(' ', '-', arrayNames[that]).replace("'", '') + ".jpg')";
                doc.getElementById("tblRowUpgrade" + that + "tblCellUpgrade" + 21).innerHTML = '<p>' + "原子每秒产量 X " + Number(arMulti[that]).toFixed(2) + '</p>';
                var upTotal = 0;
                for (var x in upgradeAll[that]) upTotal += (upgradeAll[that][x] == 2) ? 1 : 0;
                doc.getElementById("tblRowUpgrade" + (that) + "tblCellUpgrade" + 22).innerHTML = '<p>' + upTotal + ' / 20</p>';
            }
            var cell;
            if (doc.readyState === "complete") {
                var capitalized = (arUnit[that][4].toString() != "1") ? toTitleCase(plurials(cnname(arrayNames[that]))) : toTitleCase(cnname(arrayNames[that]));
                switch (arUnit[that][4].toString()) {
                    case "1":cell = 1;break;
                    case "5":cell = 2;break;
                    case "25":cell = 3;break;
                    case "50":cell = 4;break;
                    case "75":cell = 5;break;
                    case "100":cell = 6;break;
                    case "150":cell = 7;break;
                    case "200":cell = 8;break;
                    case "250":cell = 9;break;
                    case "300":cell = 10;break;
                    case "350":cell = 11;break;
                    case "400":cell = 12;break;
                    case "450":cell = 13;break;
                    case "500":cell = 14;break;
                    case "600":cell = 15;break;
                    case "700":cell = 16;break;
                    case "800":cell = 17;break;
                    case "900":cell = 18;break;
                    case "1000":cell = 19;break;
                    case "1100":cell = 20;break;
                }
            }
            if (cell != undefined) {
                if (noti) gritter('奖励达成 !', "<p class='little'>" + '+' + arrayToolTip[cell - 1] + "% 原子每秒产量</p>", null, arUnit[that][4], capitalized);
                if (upgradeAll[that][cell] != 2) {
                    var i = doc.getElementById("tblRowUpgrade" + that + "tblCellUpgrade" + cell);
                    i.className += " hoverbox"; i.style.opacity = "1"; i.style.cursor = "pointer";
                    $('#tblRowUpgrade' + that + "tblCellUpgrade" + cell).attr('onclick', 'upgrade(' + that + "," + cell + ')');
                    i.innerHTML = "<img class='upgrades img-responsive' data-toggle='tooltip' data-html='true' data-placement='right' title='<p>效果 : " + "+" + arrayToolTip[cell - 1] + "% 原子每秒产量</p><p>消耗 : " + rounding(bonusCost[that][cell - 1], false,0) + " 原子</p>' src='images/atombonus2.png'/>";
                    upgradeAll[that][cell] = [1];
                    $('.upgrades').tooltip(option);
                }
            }
        }

        function upgrade(p_row, p_cell) {
            if (upgradeAll[p_row][p_cell] == 1 && totalAtome >= bonusCost[p_row][p_cell - 1]) {
                bonusinvest += bonusCost[p_row][p_cell - 1];
                doc.getElementById('bonusinvested').innerHTML = rounding(bonusinvest, false,0);
                atomsinvest += bonusCost[p_row][p_cell - 1];
                doc.getElementById('atomsinvest').innerHTML = rounding(atomsinvest, false,0);
                totalAtome -= bonusCost[p_row][p_cell - 1];
                doc.getElementById('upgradesbought').innerHTML = rounding(++upgradesbought, false,0);
                doc.getElementById("tblRowUpgrade" + p_row + "tblCellUpgrade" + p_cell).className = "lowwidth tblUpgrade";
                doc.getElementById("tblRowUpgrade" + p_row + "tblCellUpgrade" + p_cell).style.cursor = "default";
                doc.getElementById("tblRowUpgrade" + p_row + "tblCellUpgrade" + p_cell).innerHTML = "<img src='images/atombonus1.png'/>";
                upgradeAll[p_row][p_cell] = [2];
                var upTotal = 0;
                for (var x in upgradeAll[p_row])
                    if (upgradeAll[p_row][x] == 2) upTotal++;
                doc.getElementById("tblRowUpgrade" + p_row + "tblCellUpgrade" + 22).innerHTML = '<p>' + upTotal + ' / 20</p>';
                arMulti[p_row] += arrayToolTip[p_cell - 1] / 100;
                doc.getElementById("tblRowUpgrade" + p_row + "tblCellUpgrade" + 21).innerHTML = '<p>' + "原子每秒产量 X " + (Math.round(arMulti[p_row] * 100) / 100) + '</p>';

                var that = p_row;
                var todiff = 0;
                if (arUnit[that][4] > 0) todiff = calcDiff(that);
                var thatname = replaceAll("\'", "", replaceAll(' ', '', arrayNames[that]));
                switch (thatname) {
                    case "oortcloud":
                        thatname = "solarsystemsoortcloud";
                        break;
                    case "kuiperbelt":
                        thatname = "solarsystemskuiperbelt";
                        break;
                    case "solarneighborhood":
                        thatname = "solarsystemssolarneighborhood";
                        break;
                    case "ngc4889":
                        thatname = "cdgalaxyngc4889";
                        break;
                    case "galacticgroup":
                        thatname = "localgalacticgroup";
                        break;
                    case "galacticsupercluster":
                        thatname = "localgalacticsupercluster";
                        break;
                }
                for (var a in arrayINI["array" + thatname]) arUnit[that][17][a] = (allspec[that].done) ? (arrayINI["array" + thatname][a] * 100) * arMulti[that] : arrayINI["array" + thatname][a] * arMulti[that];
                arUnit[that][5] = (allspec[that].done) ? (apsINI["aps" + thatname] * 100) * arMulti[that] : apsINI["aps" + thatname] * arMulti[that];

                var uptotal = 0;
                if (arUnit[that][4] > 0) {
                    uptotal = (calcDiff(that) - todiff);
                    atomepersecond += uptotal;
                }

                var result = rounding(uptotal, false,0);
                var resultString = (result == 0) ? "太微不足道" : "+" + result + " 原子每秒产量";
                if (noti) gritter('提升 !', resultString, null, toTitleCase(plurials(cnname(arrayNames[that]))) + " X" + Number(arMulti[p_row]).toFixed(2) + " 原子每秒产量", "");
                updateprogress(that);
                (that < 74) ? seeUnit(that + 1): seeUnit(that - 1);
                seeUnit(that);
                doc.getElementById("atomepersecond").innerHTML = rounding(atomepersecond, true,0) + " 原子/秒";
                updateBonusAll();
                achiUp();
            }
        }

        function calcDiff(that) {
            var r = 0.0;
            for (var x = 0; x < arUnit[that][4]; x++)
                switch (true) {
                    case (x < 5):r += arUnit[that][17][1];break;
                    case (x < 25):r += arUnit[that][17][2];break;
                    case (x < 50):r += arUnit[that][17][3];break;
                    case (x < 75):r += arUnit[that][17][4];break;
                    case (x < 100):r += arUnit[that][17][5];break;
                    case (x < 150):r += arUnit[that][17][6];break;
                    case (x < 200):r += arUnit[that][17][7];break;
                    case (x < 250):r += arUnit[that][17][8];break;
                    case (x < 300):r += arUnit[that][17][9];break;
                    case (x < 350):r += arUnit[that][17][10];break;
                    case (x < 400):r += arUnit[that][17][11];break;
                    case (x < 450):r += arUnit[that][17][12];break;
                    case (x < 500):r += arUnit[that][17][13];break;
                    case (x < 600):r += arUnit[that][17][14];break;
                    case (x < 700):r += arUnit[that][17][15];break;
                    case (x < 800):r += arUnit[that][17][16];break;
                    case (x < 900):r += arUnit[that][17][17];break;
                    case (x < 1000):r += arUnit[that][17][18];break;
                    case (x >= 1000):r += arUnit[that][17][19];break;
                }
            return r;
        }

        var cryptArray2 = ['E', 'F', 'C', 'A', 'K', 'L', 'Q', 'Z', 'U', 'P'];
        var alphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'C', '<', '>', '=', '\"', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var cryptArray = ['☺', '☻', '♥', '♦', '♣', '£', '•', '◘', '○', '◙', '♂', '♀', '♪', '♫', '☼', '►', '◄', '↕', '‼', '¶', '§', '▬', '↨', '↑', '↓', '→', '←', '∟', '↔', '▲', '▼', 'æ', '╚', '‰', '¤', 'Œ', 'Ž', '®', 'Þ', '█', '┘'];
        var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        function encrypt(p_data) {
            var str = p_data;
            for (var x = 0; x < alphaArray.length; x++) str = replaceAll(alphaArray[x], cryptArray[x], str);
            return str;
        }

        function decrypt(p_data) {
            var str = p_data;
            for (var x = 0; x < alphaArray.length; x++) str = replaceAll(cryptArray[x], alphaArray[x], str);
            return str;
        }

        function encryptValue(p_data) {
            var str = p_data;
            for (var x = 0; x < numArray.length; x++) str = replaceAll(numArray[x], cryptArray2[x], str);
            return str;
        }

        function decryptValue(p_data) {
            var str = p_data;
            for (var x = 0; x < numArray.length; x++) str = replaceAll(cryptArray2[x], numArray[x], str);
            return Number(str);
        }

        function decryptSize(p_data) {
            var str = p_data;
            for (var x = 0; x < numArray.length; x++) str = replaceAll(cryptArray2[x], numArray[x], str);
            return str;
        }

        function replaceAll(find, replace, str) {
            return (str != null) ? str.replace(new RegExp(find, 'g'), replace) : "";
        }

        function specialclick(that) {
            if (allspec[that].done == undefined) allspec[that]["done"] = false;
            if (allspec[that].cost <= totalAtome && allspec[that].done == false) {
                doc.getElementById('specialsbought').innerHTML = rounding(++specialsbought, false,0);
                if (that == 74) {
                    var totalunit = 0;
                    for (var y = 0; y < 75; y++) totalunit += Number(arUnit[y][4]);
                    doc.getElementById('totalunitsEnd').innerHTML = rounding(totalunit, false,0);
                    doc.getElementById('atomsaccuEnd').innerHTML = rounding(atomsaccu, false,0);
                    doc.getElementById('atomsinvestEnd').innerHTML = rounding(atomsinvest, false,0);
                    doc.getElementById('specialsboughtEnd').innerHTML = rounding(specialsbought, false,0);
                    doc.getElementById('upgradesboughtEnd').innerHTML = rounding(upgradesbought, false,0);
                    doc.getElementById('bonusinvestedEnd').innerHTML = rounding(bonusinvest, false,0);
                    doc.getElementById('achivsunlockedEnd').innerHTML = rounding(totalAchi(), false,0);
                    doc.getElementById('blackholeWEnd').innerHTML = prestige.toFixed(2);
                    doc.getElementById('timeplayedEnd').innerHTML = (Math.round(timeplayed / 30) / 60).toFixed(1) + " 小时";
                    $('#congrats').show();
                }
                atomsinvest += allspec[that].cost;
                doc.getElementById('atomsinvest').innerHTML = rounding(atomsinvest, false,0);
                allspec[that].done = true;
                totalAtome -= allspec[that].cost;
                var diff1 = calcDiff(that);
                for (var a in arUnit[that][17]) arUnit[that][17][a] *= 100;
                arUnit[that][5] *= 100;
                var specaps = 0;
                if (arUnit[that][4] > 0) {
                    specaps = (calcDiff(that) - diff1);
                    atomepersecond += specaps;
                }
                if (noti) gritter('启动 !', toTitleCase(plurials(cnname(arrayNames[that]))) + " X100 原子每秒产量", null, "+" + rounding(specaps, false,0) + " 原子每秒产量", "");
                updateprogress(that);
                $('#spec' + that).remove();
                (that < 74) ? seeUnit(that + 1): seeUnit(that - 1);
                seeUnit(that);
                checkspec();
                achiSpec();
            }
        }

        function updateprogress(that) {
            var found = false;
            for (var aa in arUnit[that][17])
                if (!found)
                    if (doc.getElementById("idApsprogressidp" + (that + 1) + "idcost" + aa) != null) {
                        found = true;
                        if (doc.getElementById("idApsprogressidp" + (that + 1) + "idcost" + aa).innerHTML != "")
                            doc.getElementById("idApsprogressidp" + (that + 1) + "idcost" + aa).innerHTML = rounding(arUnit[that][17][aa], false,0) + " 原子每秒生产";
                    } else if (doc.getElementById("idApsprogressidp" + (that + 1) + "idcost" + (that + 1) + aa) != null) {
                found = true;
                if (doc.getElementById("idApsprogressidp" + (that + 1) + "idcost" + (that + 1) + aa).innerHTML != "")
                    doc.getElementById("idApsprogressidp" + (that + 1) + "idcost" + (that + 1) + aa).innerHTML = rounding(arUnit[that][17][aa], false,0) + " 原子每秒生产";
            }
        }

        function changeBackground() {
            var allselect = doc.getElementById("allselect");
            var thatoption = allselect.options[allselect.selectedIndex].value;
            var thatimage;
            switch (thatoption) {
                case "uni":thatimage = "url('background/universeeye.jpg')";break;
                case "gli":thatimage = "url('background/glitchmob.jpg')";break;
                case "fus":thatimage = "url('background/fusion.jpg')";break;
                case "fir":thatimage = "url('background/fireandice.jpg')";break;
                case "nig":thatimage = "url('background/nightsky.png')";break;
                case "dee":thatimage = "url('background/deepspace.jpg')";break;
                default:thatimage = "url('wallpaper-static.png'), url('wallpaper-scroll.jpg')";break;
            }
            doc.getElementById("body").style.backgroundImage = thatimage;
            if (thatimage == "url('wallpaper-static.png'), url('wallpaper-scroll.jpg')"){
                doc.getElementById("body").style.backgroundRepeat = "no-repeat, repeat";
                doc.getElementById("body").style.backgroundAttachment = "fixed, scroll";
            }
            else{
                doc.getElementById("body").style.backgroundRepeat = "repeat";
                doc.getElementById("body").style.backgroundAttachment = "scroll";
            }

        }

        function checkSelectBack() {
            var bodystyle = doc.getElementById('body').style.cssText;
            doc.getElementById("allselect").selectedIndex = (bodystyle.indexOf('universeeye') != -1) ? 1 : (bodystyle.indexOf('glitchmob') != -1) ? 2 : (bodystyle.indexOf('fusion') != -1) ? 4 : (bodystyle.indexOf('fireandice') != -1) ? 5 : (bodystyle.indexOf('nightsky') != -1) ? 3 : (bodystyle.indexOf('deepspace') != -1) ? 6 : 0;
        }

        function bonusAll() {for (var x = 0; x < 75; x++) for (var y = 1; y < 21; y++) upgrade(x, y); updateBonusAll(); bonusshow();}
        function totalUpgrades() {var t = 0; for (var i in upgradeAll) for (var ii in upgradeAll[i]) t += (upgradeAll[i][ii] == 2) ? 1 : 0;return t;}

function checkAchievement(that,last){
    if (!last) that--; 
    switch (true){
        case (that < 5):achiQuantum(that,1);break;
        case (that < 9):achiMolecular(that,2);break;
        case (that < 12):achiCellular(that,3);break;
        case (that < 16):achiMiniature(that,4);break;
        case (that < 20):achiOrganic(that,5);break;
        case (that < 24):achiMassive(that,6);break;
        case (that < 34):achiPlanetary(that,7);break;
        case (that < 46):achiStellar(that,8);break;
        case (that < 59):achiCelestial(that,9);break;
        case (that < 67):achiGalactic(that,10);break;
        case (that < 74):achiHypergalactic(that,11);break;
        case (that == 74):achiUnique();break;
    }
}

function flow(nbr){
    switch (nbr){
            case 1:case 5:nbr*=5;break;
            case 25:case 50:case 75:nbr+=25;break;
            case 100:case 150:case 200:case 250:case 300:case 350:case 400:case 450:nbr+=50;break;
            case 500:case 600:case 700:case 800:case 900:nbr+=100;break;
            case 1000:nbr++;
        }
    return nbr;
}


function getAchi(a,number,b){
    if (allachiUnit[a-1][number] != 1){
        allachiUnit[a-1][number] = 1;
        if (achievementsUnlocked[a-1][number] != 1){
            achievementsUnlocked[a-1][number] = 1;
            if (noti) gritter("成就解锁!", "<p class='nameachi'>" + allachiNames[a-1][number] +"</p>", "achivs/"+a+arAlpha[number]+".jpg", null,null);
            doc.getElementById("achiv"+a+arAlpha[number]).innerHTML = "<img style='border:1px ridge black;' onmouseover='getachiInfos("+a+","+number+","+b+")' onmouseleave='getachiInfosNo("+a+")' height='84' width='84' src='achivs/"+a+arAlpha[number]+".jpg'/>";
            achievement();
            doc.getElementById('achivsunlocked').innerHTML = rounding(totalAchi(),false,0);
        }
        for (i=0; i<75; i++){
            arUnit[i][2] -= (arUnit[i][2] / 100) * (number + 1);
            var unitDomain = getUnitDomain(i);
            var achivBonus = achiCostPercent[unitDomain] + achiCostPercent[14] + achiCostPercent[12] + achiCostPercent[11];
            var unitPromoCost = arUnit[i][2]-((arUnit[i][2]/100)*achivBonus);
            if (doc.getElementById(arUnit[i][7]) != null) doc.getElementById(arUnit[i][7]).innerHTML = rounding(Number(unitPromoCost), false,0);
        }
    }
}

function getachiInfos(a,number,b){
    var s = "拥有 <strong>"+b+"</strong> 个 "+cntype(arraySectionNames[a-1])+" 单位";
    var text = "<p class='achieffect'>"+cntype(arraySectionNames[a-1])+" 单位成本 -"+(number+1)+"% "+ "</p>"
    if (a > 11){
        var plur;
        if (a == 12 || a == 13) {
            if (b == 1) plur = arraySectionNames[a-1].toLowerCase(); else plur = plurials(arraySectionNames[a-1].toLowerCase());
            s = "<strong>"+b+"</strong> "+plur+" 消耗";
            text = "<p class='achieffect'>全部单位成本 " + "-"+(number+1)+"%" + "</p>"
        }
        else if (a == 14) { 
            if (b == 1) plur = " 宇宙"; else plur = " 宇宙";
            s = "<strong>"+b+"</strong>"+plur;
        }
        else if (a == 15) { 
            s = "<strong>"+b+"</strong> 成就解锁";
            text = "<p class='achieffect'>全部单位成本 " + "-"+(number+1)+"% " + "</p>"
        }
    }
    doc.getElementById('info'+a).innerHTML = "<p class='achinames'>"+allachiNames[a-1][number]+"</p><p class='achidesc'>"+s+"</p>"+text;
}

function getachiInfosNo(a){
    doc.getElementById('info'+a).innerHTML = "";
}


function getachiInfoLock(a){
    doc.getElementById('info'+a).innerHTML = "<p class='achinames'>???</p>";
}
function achiQuantum(that,a){
    var number = 0, nbr = 1;
    while (nbr <= 1000){
        if (arUnit[0][4] >= nbr && arUnit[1][4] >= nbr && arUnit[2][4] >= nbr && arUnit[3][4] >= nbr && allachiUnit[a-1][number] == 0) getAchi(a,number,nbr);
        number++; nbr = flow(nbr);
    }
}

function achiMolecular(that,a){
    var number = 0, nbr = 1;
    while (nbr <= 1000){
        if (arUnit[4][4] >= nbr && arUnit[5][4] >= nbr && arUnit[6][4] >= nbr && arUnit[7][4] >= nbr && arUnit[8][4] >= nbr && allachiUnit[a-1][number] == 0) {getAchi(a,number,nbr);}
        number++; nbr = flow(nbr);
    }
}
    
function achiCellular(that,a){
    var number = 0, nbr = 1;
    while (nbr <= 1000){
        if (arUnit[9][4] >= nbr && arUnit[10][4] >= nbr && arUnit[11][4] >= nbr && allachiUnit[a-1][number] == 0) {getAchi(a,number,nbr);}
        number++; nbr = flow(nbr);
    }
}

function achiMiniature(that,a){
    var number = 0, nbr = 1;
    while (nbr <= 1000){
        if (arUnit[12][4] >= nbr && arUnit[13][4] >= nbr && arUnit[14][4] >= nbr && arUnit[15][4] >= nbr && allachiUnit[a-1][number] == 0) getAchi(a,number,nbr);
        number++; nbr = flow(nbr);
    }
}

function achiOrganic(that,a){
    var number = 0, nbr = 1;
    while (nbr <= 1000){
        if (arUnit[16][4] >= nbr && arUnit[17][4] >= nbr && arUnit[18][4] >= nbr && arUnit[19][4] >= nbr && allachiUnit[a-1][number] == 0) getAchi(a,number,nbr);
        number++; nbr = flow(nbr);
    }
}

function achiMassive(that,a){
    var number = 0, nbr = 1
    while (nbr <= 1000){
        if (arUnit[20][4] >= nbr && arUnit[21][4] >= nbr && arUnit[22][4] >= nbr && arUnit[23][4] >= nbr && allachiUnit[a-1][number] == 0) getAchi(a,number,nbr);
        number++; nbr = flow(nbr);
    }
}

function achiPlanetary(that,a){
    var number = 0, nbr = 1;
    while (nbr <= 1000){
        if (arUnit[24][4] >= nbr && arUnit[25][4] >= nbr && arUnit[26][4] >= nbr && arUnit[27][4] >= nbr && arUnit[28][4] >= nbr && arUnit[29][4] >= nbr && arUnit[30][4] >= nbr && arUnit[31][4] >= nbr && arUnit[32][4] >= nbr && arUnit[33][4] >= nbr && allachiUnit[a-1][number] == 0) getAchi(a,number,nbr);
        number++; nbr = flow(nbr);
    }
}   

function achiStellar(that,a){
    var number = 0, nbr = 1;
    while (nbr <= 1000){
        if (arUnit[34][4] >= nbr && arUnit[35][4] >= nbr && arUnit[36][4] >= nbr && arUnit[37][4] >= nbr && arUnit[38][4] >= nbr && arUnit[39][4] >= nbr && arUnit[40][4] >= nbr && arUnit[41][4] >= nbr && arUnit[42][4] >= nbr && arUnit[43][4] >= nbr && arUnit[44][4] >= nbr && arUnit[45][4] >= nbr && allachiUnit[a-1][number] == 0) getAchi(a,number,nbr);
        number++; nbr = flow(nbr);
    }
} 

function achiCelestial(that,a){
    var number = 0, nbr = 1;
    while (nbr <= 1000){
        if (arUnit[46][4] >= nbr && arUnit[47][4] >= nbr && arUnit[48][4] >= nbr && arUnit[49][4] >= nbr && arUnit[50][4] >= nbr && arUnit[51][4] >= nbr && arUnit[52][4] >= nbr && arUnit[53][4] >= nbr && arUnit[54][4] >= nbr && arUnit[55][4] >= nbr  && arUnit[56][4] >= nbr  && arUnit[57][4] >= nbr  && arUnit[58][4] >= nbr && allachiUnit[a-1][number] == 0) getAchi(a,number,nbr);
        number++; nbr = flow(nbr);
    }
}

function achiGalactic(that,a){
    var number = 0, nbr = 1;
    while (nbr <= 1000){
        if (arUnit[59][4] >= nbr && arUnit[60][4] >= nbr && arUnit[61][4] >= nbr && arUnit[62][4] >= nbr && arUnit[63][4] >= nbr && arUnit[64][4] >= nbr && arUnit[65][4] >= nbr && arUnit[66][4] >= nbr && allachiUnit[a-1][number] == 0) getAchi(a,number,nbr);
        number++; nbr = flow(nbr);
    }
}

function achiHypergalactic(that,a){
    var number = 0, nbr = 1;
    while (nbr <= 1000){
        if (arUnit[67][4] >= nbr && arUnit[68][4] >= nbr && arUnit[69][4] >= nbr && arUnit[70][4] >= nbr && arUnit[71][4] >= nbr && arUnit[72][4] >= nbr && arUnit[73][4] >= nbr && allachiUnit[a-1][number] == 0) getAchi(a,number,nbr);
        number++; nbr = flow(nbr);
    }
}

        var allachiNames = [
        ["新生","自由粒子","量子隧穿","光子极化","量子色动力学","量子纠缠","超流","超导","II型超导","量子霍尔效应","波粒二象性","磁通量子","超越标准模式","小公园效应","Abrikosov vortex","量子谐振子","机械共振","量化","量子领域"],
        ["β粒子","流体静力学 平衡","非共价相互作用","库仑势垒","放射性同位素","氢键","振动频率","金属键","分子轨道","酶催化","伽玛衰变","扫描隧道","强相互作用","衍射","吸热粒子","受激发射","外来物理性质","超铀进化","超分子"],
        ["革兰氏阴性菌","原核细胞","真核细胞","高尔基体","中心体","空泡","内质网","蛋白质合成","内共生菌","固氮","固氮菌","蓝藻","叶绿体聚集","质壁分离","核糖体","合体细胞","成纤维细胞","产甲烷","共生"],
        ["头发拉直","生长期","退化期","休止期","石膏砂","磁铁矿积累","片麻岩石英晶体","高橄榄石含量","Arenophile","双受精","多倍体细胞","胚胎形成","麝香猫咖啡豆","干式加工","非挥发性生物碱","可可碱浓度","咖啡杯","洛林派","酒杯"],
        ["Organelles","基因重组","自养","中间代谢","碳固定","蛋白质生物合成","转录因子","DNA结合域","识别序列","基因复制","氢解","自然能力","基因水平转移","抗生素耐药性","传导","先进的碱基配对","夹层","四链DNA结构","超级有机体"],
        ["三相交流电","大型电网储能","重力基台","悬臂基台","全高基台","门式起重机辅助","液压千斤顶","戈尔姆发射机" ,"高水动力","经纬仪需要","重结晶白云石","白风化凝块石","白云母 - 黑云母千枚岩","淡色花岗岩的堤防","渐新世 - 中新世岩石","高原反应","主要的冻伤","死亡地带"],
        ["星号","邻域清除","退化物质","泡利排除","角动量守恒","三重阿尔法过程","量子简并压力","拖曳框架","星云假设","轨道共振","质量隔离","能量均衡","电磁辐射","轨道偏心","同步旋转","同位素丰度","星团","超星团","球状星团"],
        ["恒星残余物","光的畸变","排泄光盘","辐射压力","恒星碰撞","伽马射线爆裂","热失控","引力波","主序列","黄道光","恒星团","双星蚀变","氘燃烧","热力学平衡","合成成像","恒星等时线","恒星运动学","恒星动力学"],
        ["红色的丛","冠状环","日冕物质喷射","什卡多夫推进器","磁铁诞生","氧燃烧过程","辐射平衡","不稳定带","米拉变量","行星状星云","发光蓝变量","氦闪光","质子 - 质子链反应","S-过程","星际地震","天体漂移","天体视差","超级变形"],
        ["半乳糖中心主义","银河光晕","银河系球体","气体冠冕","相互作用的星系","银河合并","银河食人族","星爆星系","大设计螺旋星系","银河系平面","奇特星系","塞弗特星系","光子解耦","引力松弛","集群内介质","星系团","超星系团"],
        ["星云","宇宙网","宇宙视界","萨克斯 - 沃尔夫效应","引力红移","虚空星系","时钟座超星系团","子弹群集","强烈的引力透镜","斯隆长城","宇宙尘埃","宇宙射线","宇宙空间","红移空间扭曲","宇宙常数","宇宙微波背景","英仙座 - 双鱼座超星系团","双鱼座 - 复杂","一切理论"],
        ["光暗物质","普通暗物质","温暗物质","热暗物质","暗物质晕","模糊冷暗物质","元冷暗物质","冷暗物质","混合的暗物质","重子暗物质","自相互作用暗物质"],
        ["中子退化物质","夸克物质","夸克星","夸克新星","精粹"],
        ["核聚变","多重通胀","多层次1级","混沌通胀","多层次2级","振荡模型","多层次3级","变形怪创作","多层次4级","终极合奏","绗缝多元宇宙","通胀多元宇宙","布尔多元宇宙","循环多重宇宙","景观多元宇宙","量子多重宇宙","全息多元宇宙","模拟多元宇宙","终极多元宇宙"],
        ["一维宇宙","二维宇宙","三维宇宙","时间维度","紧致","超弦革命"]];
                
        var allachiUnit = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0]
        ]; // 250

        function achiUp(){
            var ii = totalUpgrades();
            switch (ii.toString()){
                case "1500":getAchi(12,10,ii);break;
                case "1250":getAchi(12,9,ii);break;
                case "1000":getAchi(12,8,ii);break;
                case "750":getAchi(12,7,ii);break;
                case "500":getAchi(12,6,ii);break;
                case "250":getAchi(12,5,ii);break;
                case "100":getAchi(12,4,ii);break;
                case "50":getAchi(12,3,ii);break;
                case "25":getAchi(12,2,ii);break;
                case "5":getAchi(12,1,ii);break;
                case "1":getAchi(12,0,ii);break;
            }
        }

        function totalAchi(){var b = 0; for (var c in achievementsUnlocked) for (var d in achievementsUnlocked[c]) if (achievementsUnlocked[c][d] == 1) b++; return b;}

        function achievement(){
            var a = totalAchi();
            switch (a.toString()){
                case "10":getAchi(15,0,a);break;
                case "50":getAchi(15,1,a);break;
                case "100":getAchi(15,2,a);break;
                case "150":getAchi(15,3,a);break;
                case "200":getAchi(15,4,a);break;
                case "249":getAchi(15,5,a);break;  
            }
        }

        function totalSpec(){
            var t = 0;
            for (var a in allspec){
                if (allspec[a].done == true){
                    t++;
                }
            }
            return t;
        }

        function achiSpec(){
            var b = totalSpec();
            switch (b.toString()){
                case "75":getAchi(13,4,b);break;
                case "50":getAchi(13,3,b);break;
                case "25":getAchi(13,2,b);break;
                case "5":getAchi(13,1,b);break;
                case "1":getAchi(13,0,b);break;
            }
        }

        function achiUnique(){
            var a = arUnit[74][4];
            switch (a.toString()){
                case "1":getAchi(14,0,a);break;
                case "5":getAchi(14,1,a);break;
                case "25":getAchi(14,2,a);break;
                case "50":getAchi(14,3,a);break;
                case "75":getAchi(14,4,a);break;
                case "100":getAchi(14,5,a);break;
                case "150":getAchi(14,6,a);break;
                case "200":getAchi(14,7,a);break;
                case "250":getAchi(14,8,a);break;
                case "300":getAchi(14,9,a);break;
                case "350":getAchi(14,10,a);break;
                case "400":getAchi(14,11,a);break;
                case "450":getAchi(14,12,a);break;
                case "500":getAchi(14,13,a);break;
                case "600":getAchi(14,14,a);break;
                case "700":getAchi(14,15,a);break;
                case "800":getAchi(14,16,a);break;
                case "900":getAchi(14,17,a);break;
                case "1000":getAchi(14,18,a);break;
            }
        }

function lightreset(){
    if (totalAtome >= 1000000000000000000){
        manualSave();
        var t = calcPres();
        prestige += t;
        if (Px < 800 && Py < 800){
            Px += (t*100);
            Py += (t*100);
        }
        localStorage.setItem(encrypt("prestige"),encryptValue(prestige.toString()));
        localStorage.setItem(encrypt("Px"),encryptValue(Px.toString()));
        localStorage.setItem(encrypt("Py"),encryptValue(Py.toString()));
        for (a in localStorage){
            if (a != encrypt('prestige') && a != encrypt('Px') && a != encrypt('Py') && a != "gameVersion" && a != encrypt('achievementsUnlocked') && a != "audioMute"){
                localStorage.removeItem(a);
            }
        }
        $("#tofeed").attr({
            "disabled": ''
        });
        localStorage.setItem('justReset', true)
        window.location.reload();
    }
}
function calcPres(){
    var t = 0;
    var b = totalAtome;
    while (b >= 10){
        switch(true){
            case (b < 1000000000000):t += 1 / prestige;break;
            case (b < 1000000000000000000):t += 2 / prestige;break;
            case (b < 100000000000000000000000):t += 3 / prestige;break;
            case (b < 10000000000000000000000000000):t += 4 / prestige;break;
            case (b < 1000000000000000000000000000000000):t += 5 / prestige;break;
            case (b < 100000000000000000000000000000000000000):t += 6 / prestige;break;
            case (b < 10000000000000000000000000000000000000000000):t += 7 / prestige;break;
            case (b < 1000000000000000000000000000000000000000000000000):t += 8 / prestige;break;
            case (b < 100000000000000000000000000000000000000000000000000000):t += 9 / prestige;break;
            case (b < 100000000000000000000000000000000000000000000000000000000000):t += 10 / prestige;break;
            case (b < 100000000000000000000000000000000000000000000000000000000000000000):t += 11 / prestige;break;
            case (b < 100000000000000000000000000000000000000000000000000000000000000000000000):t += 12 / prestige;break;
            case (b < 100000000000000000000000000000000000000000000000000000000000000000000000000000):t += 13 / prestige;break;
            case (b < 100000000000000000000000000000000000000000000000000000000000000000000000000000000000):t += 14 / prestige;break;
            case (b >= 100000000000000000000000000000000000000000000000000000000000000000000000000000000000):t += 15 / prestige;break;
        }
        b/=10;
    }
	return (t > 0) ? (t/100) / 2 : t;
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var keyEventHandler = function() {
    document.addEventListener('keydown', function(e) {
        /*if (e.keyCode == 67 && !e.shiftKey && e.ctrlKey && e.altKey && !e.metaKey)
        {
            if (cheat == false)
            {
                cheat = true;
                gameSpeed = 10;
                gritter('RTU Cheat', 'Speed x100 Enabled',null, null);
            }
            else
            {
                cheat = false;
                gameSpeed = 1000;
                gritter('RTU Cheat', 'Speed x100 Disabled',null, null);
            }
        }
        if (e.keyCode == 90 && !e.shiftKey && e.ctrlKey && e.altKey && !e.metaKey)
        {
            //prestige = 40.0
            totalAtome = 1000000000000000000000000000000000000000000000000000000000000000000000000
            //Px = 500
            //Py = 500
            gritter('RTU Cheat', 'Prestige set to 5.0',null, null);
        }
        if (e.keyCode == 73 && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey)
        {
            //prestige = 10.0
            //totalAtome = 1000000000000000000000000000000000000000000000000000000000000000000000000
            //prestige = 20
            //Px = 500
            //Py = 500
            if(gameSpeed == 1){
                gameSpeed = 100;
                gritter('RTU Cheat', 'GameSpeed x100',null, null);
            }
            else{
                gameSpeed = 1;
                gritter('RTU Cheat', 'GameSpeed x1',null, null);
            }
        }
        if (e.keyCode == 79 && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey){
            if(gameSpeed == 1){
                gameSpeed = 0;
                gritter('RTU Cheat', 'Game Paused',null, null);
            }
            else if(gameSpeed == 0){
                gameSpeed = 1;
                gritter('RTU Cheat', 'Game Resumed',null, null);
            }
        }*/
        if (e.keyCode == 82 && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey)
        {
            localStorage.clear();
            gritter('Info', 'Cache Cleared',null, null);
            location.reload();
        }
        if (e.keyCode == 70 && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey)
        {
            checkUpgradeFix();
            gritter('Info', 'Checked all bonuses.',null, null);
        }
    }, false);
};

keyEventHandler();

function mute() {
    audioMute = !audioMute
    document.getElementById('background_audio').muted = audioMute;

    if (audioMute == true){
        document.getElementById('muteButton').src = 'music-muted.png';
    }
    else{
        document.getElementById('muteButton').src = 'music.png';
    }
}

function setAudioVolume() {
    var myAudio = document.getElementById("background_audio");  
    myAudio.volume = 0.25;
}

var unitDomainArray = [
    [0,1,2,3],
    [4,5,6,7,8],
    [9,10,11],
    [12,13,14,15],
    [16,17,18,19],
    [20,21,22,23],
    [24,25,26,27,28,29,30,31,32,33],
    [34,35,36,37,38,39,40,41,42,43,44,45],
    [46,47,48,49,50,51,52,53,54,55,56,57,58],
    [59,60,61,62,63,64,65,66],
    [67,68,69,70,71,72,73],
    [74]
    ]

var achievementsUnlocked = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0]
    ];

var achiCostPercent = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function getUnitDomain(that) {
    var out;
    $.each(unitDomainArray,function(k,v){
        if($.inArray(that, v) != -1){
            out = k;
            return false;
        }
    });
    return out;
}

function getUnitPromoCost(that) {
    var unitDomain = getUnitDomain(that);
    var achivBonus = achiCostPercent[unitDomain] + achiCostPercent[14] + achiCostPercent[12] + achiCostPercent[11]
    var unitPromoCost = arUnit[that][2]-((arUnit[that][2]/100)*achivBonus);
    return unitPromoCost;
}

function achivSetPercent(){
    for (var x = 0;x<achievementsUnlocked.length;x++){
        for (var y = 0;y<19;y++){
            if (achievementsUnlocked[x][y] == 1){
                achiCostPercent[x] = achiCostPercent[x]+1
            }
        }
    }
}

function checkUpgradeFix() {
    for (var that = 0; that < 75; that++) {
        updateBonusAll();
        var cell;
        if (doc.readyState === "complete") {
            var capitalized = (arUnit[that][4].toString() != "1") ? toTitleCase(plurials(arrayNames[that])) : toTitleCase(arrayNames[that]);
            var a = (arUnit[that][4])
            if(a>=1){
                if(a<=1){cell = 1} else
                if(a<=5){cell = 2} else
                if(a<=25){cell = 3} else
                if(a<=50){cell = 4} else
                if(a<=75){cell = 5} else
                if(a<=100){cell = 6} else
                if(a<=150){cell = 7} else
                if(a<=200){cell = 8} else
                if(a<=250){cell = 9} else
                if(a<=300){cell = 10} else
                if(a<=350){cell = 11} else
                if(a<=400){cell = 12} else
                if(a<=450){cell = 13} else
                if(a<=500){cell = 14} else
                if(a<=600){cell = 15} else
                if(a<=700){cell = 16} else
                if(a<=800){cell = 17} else
                if(a<=900){cell = 18} else
                if(a<=1000){cell = 19} else
                if(a<=1100){cell = 20} else
                if(a>=1100){cell = 20}
            }
        }
        if (cell != undefined && cell >= 1) {
            if (doc.getElementById("tblRowUpgrade" + that).className.indexOf("rowOn") == -1 && cell > 0) {
                doc.getElementById("tblRowUpgrade" + that).className = "tablerow rowOn";
                doc.getElementById("tblRowUpgrade" + that + "tblCellUpgrade" + 0).innerHTML = '</div><p>' + arrayNames[that] + '</p>';
                doc.getElementById("tblRowUpgrade" + that + "tblCellUpgrade" + 0).style.backgroundImage = "url('imagesFull/" + replaceAll(' ', '-', arrayNames[that]).replace("'", '') + ".jpg')";
                doc.getElementById("tblRowUpgrade" + that + "tblCellUpgrade" + 21).innerHTML = '<p>' + "原子每秒产量 X " + Number(arMulti[that]).toFixed(2) + '</p>';
                var upTotal = 0;
                for (var x in upgradeAll[that]) upTotal += (upgradeAll[that][x] == 2) ? 1 : 0;
                doc.getElementById("tblRowUpgrade" + (that) + "tblCellUpgrade" + 22).innerHTML = '<p>' + upTotal + ' / 20</p>';
            }
            while(cell>0){
                if (upgradeAll[that][cell] != 2) {
                    var i = doc.getElementById("tblRowUpgrade" + that + "tblCellUpgrade" + cell);
                    i.className += " hoverbox"; i.style.opacity = "1"; i.style.cursor = "pointer";
                    $('#tblRowUpgrade' + that + "tblCellUpgrade" + cell).attr('onclick', 'upgrade(' + that + "," + cell + ')');
                    i.innerHTML = "<img class='upgrades img-responsive' data-toggle='tooltip' data-html='true' data-placement='right' title='<p>效果 : " + "+" + arrayToolTip[cell - 1] + "% 原子每秒产量</p><p>消耗 : " + rounding(bonusCost[that][cell - 1], false,0) + " 原子</p>' src='images/atombonus2.png'/>";
                    upgradeAll[that][cell] = [1];
                    $('.upgrades').tooltip(option);
                }
                else{
                    break;
                }
            cell = cell-1;
            }
        }
    }
}

//汉化xx
function cnname(name){
    var cntext="";
    var temp=name;
    if(temp=="quantum foam"){
        cntext="量子泡沫"
    }else if(temp=="neutrino"){
        cntext="中微子"
    }else if(temp=="preon"){
        cntext="前子"
    }else if(temp=="electron core"){
        cntext="电子核"
    }else if(temp=="proton"){
        cntext="质子"
    }else if(temp=="uranium nucleus"){
        cntext="铀核"
    }else if(temp=="gamma ray"){
        cntext="伽马射线"
    }else if(temp=="angstrom"){
        cntext="埃"
    }else if(temp=="carbon nanotube"){
        cntext="碳纳米管"
    }else if(temp=="cell membrane"){
        cntext="细胞膜"
    }else if(temp=="largest virus"){
        cntext="最大的病毒"
    }else if(temp=="white blood cell"){
        cntext="白细胞"
    }else if(temp=="human hair"){
        cntext="人头发"
    }else if(temp=="grain of sand"){
        cntext="沙粒"
    }else if(temp=="coffee bean"){
        cntext="咖啡豆"
    }else if(temp=="cup"){
        cntext="杯子"
    }else if(temp=="human"){
        cntext="人"
    }else if(temp=="giant earthworm"){
        cntext="巨型蚯蚓"
    }else if(temp=="oak tree"){
        cntext="橡树"
    }else if(temp=="redwood tree"){
        cntext="红杉树"
    }else if(temp=="hoover dam"){
        cntext="胡佛水坝"
    }else if(temp=="eiffel tower"){
        cntext="埃菲尔铁塔"
    }else if(temp=="angel falls"){
        cntext="天使降临"
    }else if(temp=="mt everest"){
        cntext="珠穆朗玛峰"
    }else if(temp=="ganymed"){
        cntext="希神"
    }else if(temp=="nereid"){
        cntext="海卫二"
    }else if(temp=="pluto"){
        cntext="冥王星"
    }else if(temp=="mars"){
        cntext="火星"
    }else if(temp=="earth"){
        cntext="地球"
    }else if(temp=="uranus"){
        cntext="天王星"
    }else if(temp=="jupiter"){
        cntext="木星"
    }else if(temp=="alpha centauri c"){
        cntext="半人马座α星C"
    }else if(temp=="alpha centauri b"){
        cntext="半人马座α星B"
    }else if(temp=="sun"){
        cntext="太阳"
    }else if(temp=="sirius a"){
        cntext="天狼星A"
    }else if(temp=="regulus"){
        cntext="狮子座α星"
    }else if(temp=="pollux"){
        cntext="双子座β星"
    }else if(temp=="arcturus"){
        cntext="牧夫座α星"
    }else if(temp=="aldebaran"){
        cntext="金牛座α"
    }else if(temp=="rigel"){
        cntext="猎户座β"
    }else if(temp=="gacrux"){
        cntext="南十字座"
    }else if(temp=="deneb"){
        cntext="天鹅座"
    }else if(temp=="pistol star"){
        cntext="手枪星"
    }else if(temp=="v382 carinae"){
        cntext="船底座v382"
    }else if(temp=="v354 cephei"){
        cntext="仙王座v354"
    }else if(temp=="kuiper belt"){
        cntext="柯伊伯带"
    }else if(temp=="homunculus nebula"){
        cntext="矮人星云"
    }else if(temp=="stingray nebula"){
        cntext="刺魟星云"
    }else if(temp=="oort cloud"){
        cntext="奥尔特云"
    }else if(temp=="cat\'s eye nebula"){
        cntext="猫眼星云"
    }else if(temp=="ring nebula"){
        cntext="环状星云"
    }else if(temp=="helix nebula"){
        cntext="旋涡星云"
    }else if(temp=="crab nebula"){
        cntext="蟹状星云"
    }else if(temp=="pillars of creation"){
        cntext="创世之柱"
    }else if(temp=="great orion nebula"){
        cntext="猎户座大星云"
    }else if(temp=="solar neighborhood"){
        cntext="太阳附近"
    }else if(temp=="omega centauri"){
        cntext="半人马座"
    }else if(temp=="m54 globular cluster"){
        cntext="M54球状星团"
    }else if(temp=="tarantula nebula"){
        cntext="蜘蛛星云"
    }else if(temp=="sagittarius dwarf galaxy"){
        cntext="人马矮星系"
    }else if(temp=="small magellanic cloud"){
        cntext="小麦哲伦星云"
    }else if(temp=="large magellanic cloud"){
        cntext="大麦哲伦星云"
    }else if(temp=="ngc 7714"){
        cntext="NGC7714星系"
    }else if(temp=="triangulum galaxy"){
        cntext="三角座星系"
    }else if(temp=="black eye galaxy"){
        cntext="黑眼星系"
    }else if(temp=="milky way galaxy"){
        cntext="银河系"
    }else if(temp=="andromeda galaxy"){
        cntext="仙女座星系"
    }else if(temp=="ngc 1232"){
        cntext="NGC1232星系"
    }else if(temp=="virgo a"){
        cntext="处女座"
    }else if(temp=="ngc 4889"){
        cntext="NGC4889星系"
    }else if(temp=="galactic group"){
        cntext="银河集团"
    }else if(temp=="ic 1101"){
        cntext="IC1101星系"
    }else if(temp=="virgo galactic group"){
        cntext="处女座星系团"
    }else if(temp=="galactic supercluster"){
        cntext="银河超星系团"
    }else if(temp=="entire universe"){
        cntext="整个宇宙"
    }else{
        return name;
    }
    return cntext;
}
//汉化类型
function cntype(type){
    var cntype="";
    var temp=type;
    if(temp=="Quantum"){
        cntype="量子"
    }else if(temp=="Molecular"){
        cntype="分子"
    }else if(temp=="Cellular"){
        cntype="细胞"
    }else if(temp=="Miniature"){
        cntype="微型"
    }else if(temp=="Organic"){
        cntype="有机"
    }else if(temp=="Massive"){
        cntype="海量"
    }else if(temp=="Planetary"){
        cntype="行星"
    }else if(temp=="Stellar"){
        cntype="恒星"
    }else if(temp=="Celestial"){
        cntype="天体"
    }else if(temp=="Galactic"){
        cntype="银河"
    }else if(temp=="Hypergalactic"){
        cntype="超银河"
    }else if(temp=="Universal"){
        cntype="普遍"
    }else if(temp=="Bonus"){
        cntype="奖金"
    }else if(temp=="Special"){
        cntype="特殊"
    }else if(temp=="Achievement"){
        cntype="成就"
    }else{
        return type;
    }
    return cntype;
}