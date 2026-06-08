import type { Word } from "@/types";

export const hanjaWords: Word[] = [
  // ── 자연 (h-nature) ──
  {
    id: "h-nature-1", category: "hanja", themeId: "h-nature", term: "森", reading: "수풀 삼", meaning: "빽빽한 숲",
    background: "나무(木)가 셋이나 모여 있어요. 나무가 이렇게 많으면 햇빛도 잘 안 드는 우거진 숲이 되지요. 그래서 '森(삼)'은 빽빽한 숲을 뜻해요.",
    difficulty: 3,
    sentences: [{ text: "森羅萬象(삼라만상)", translation: "넓고 울창한 숲(삼라)처럼 수많은 사물이 빼곡하게 펼쳐져 있고, 세상에 일어나는 모든 형태와 현상(만상)을 아우르는 말이에요.", source: "사자성어", cloze: "___羅萬象", answer: "森" }],
  },
  {
    id: "h-nature-2", category: "hanja", themeId: "h-nature", term: "湖", reading: "호수 호", meaning: "호수",
    background: "물(氵)이 넓게 고여 잔잔하게 머무는 곳이 '호수'예요. 강처럼 흐르지 않고 거울처럼 고요하지요.",
    difficulty: 3,
    sentences: [{ text: "五湖四海(오호사해)", translation: "다섯 호수(오호)와 네 바다(사해)라는 뜻으로, 온 천하와 세상 곳곳을 두루 이르는 말이에요.", source: "사자성어", cloze: "五___四海", answer: "湖" }],
  },
  {
    id: "h-nature-3", category: "hanja", themeId: "h-nature", term: "巖", reading: "바위 암", meaning: "바위",
    background: "산(山)에 있는 크고 단단한 돌덩이가 '바위'예요. 글자 안에 산이 들어 있는 게 보이지요.",
    difficulty: 4,
    sentences: [{ text: "千巖萬壑(천암만학)", translation: "수많은 바위(천암)와 골짜기(만학)라는 뜻으로, 깊고 험하면서도 아름다운 산속 경치를 나타내는 말이에요.", source: "사자성어", cloze: "千___萬壑", answer: "巖" }],
  },
  {
    id: "h-nature-4", category: "hanja", themeId: "h-nature", term: "峯", reading: "봉우리 봉", meaning: "산봉우리",
    background: "산(山)에서 가장 높이 솟은 꼭대기가 '봉우리'예요. 멀리서 보면 뾰족하게 보이는 그 끝이지요.",
    difficulty: 4,
    sentences: [{ text: "橫看成嶺側成峯(횡간성령측성봉)", translation: "가로로 보면 산줄기(영)가 되고 옆에서 보면 봉우리(봉)가 된다는 뜻으로, 보는 자리에 따라 같은 것도 다르게 보임을 일러요.", source: "소식(蘇軾)「題西林壁」", cloze: "橫看成嶺側成___", answer: "峯" }],
  },
  {
    id: "h-nature-5", category: "hanja", themeId: "h-nature", term: "溪", reading: "시내 계", meaning: "시냇물, 골짜기 물",
    background: "산골짜기를 졸졸 흐르는 작은 물줄기가 '시내'예요. 물(氵)이 들어 있어 물과 관련됨을 알 수 있어요.",
    difficulty: 4,
    sentences: [{ text: "每逐靑溪水(매축청계수)", translation: "갈 때마다 늘(매축) 푸른 시냇물(청계수)을 따라간다는 뜻으로, 맑은 계곡을 끼고 가는 한가로운 정취를 그린 구절이에요.", source: "왕유(王維)「靑溪」", cloze: "每逐靑___水", answer: "溪" }],
  },
  {
    id: "h-nature-6", category: "hanja", themeId: "h-nature", term: "露", reading: "이슬 로", meaning: "이슬",
    background: "비(雨)와 관련된 글자예요. 밤새 풀잎에 동그랗게 맺히는 물방울이 '이슬'이지요.",
    difficulty: 4,
    sentences: [{ text: "人生如朝露(인생여조로)", translation: "사람의 삶(인생)은 아침 이슬(조로)과 같다는 뜻으로, 인생이 덧없이 짧음을 이슬에 빗댄 말이에요.", source: "한서(漢書)", cloze: "人生如朝___", answer: "露" }],
  },
  {
    id: "h-nature-7", category: "hanja", themeId: "h-nature", term: "霜", reading: "서리 상", meaning: "서리",
    background: "비(雨)와 관련된 글자예요. 추운 새벽에 땅이나 풀에 하얗게 어는 얼음 가루가 '서리'예요.",
    difficulty: 4,
    sentences: [{ text: "疑是地上霜(의시지상상)", translation: "땅 위에 내린 서리(지상상)인가 의심했다(의시)는 뜻으로, 하얗게 비친 달빛을 서리에 빗댄 구절이에요.", source: "이백(李白)「靜夜思」", cloze: "疑是地上___", answer: "霜" }],
  },
  {
    id: "h-nature-8", category: "hanja", themeId: "h-nature", term: "雷", reading: "우레 뢰", meaning: "우레, 천둥",
    background: "비(雨) 아래에 밭(田) 모양이 있어요. 비가 올 때 '우르릉 쾅' 하고 울리는 천둥소리가 '우레'예요.",
    difficulty: 4,
    sentences: [{ text: "附和雷同(부화뇌동)", translation: "우레(뇌)가 치면 만물이 덩달아 울리듯, 제 생각 없이 남의 말에 그대로 따라 함을 이르는 말이에요.", source: "사자성어", cloze: "附和___同", answer: "雷" }],
  },
  {
    id: "h-nature-9", category: "hanja", themeId: "h-nature", term: "霧", reading: "안개 무", meaning: "안개",
    background: "비(雨)와 관련된 글자예요. 공기 중에 작은 물방울이 뿌옇게 퍼져 앞이 잘 안 보이게 하는 것이 '안개'예요.",
    difficulty: 5,
    sentences: [{ text: "五里霧中(오리무중)", translation: "오 리(약 2km)에 걸친 짙은 안개(무) 속(중)에 있다는 뜻으로, 일이 어찌 될지 갈피를 잡을 수 없음을 이르는 말이에요.", source: "후한서(後漢書)", cloze: "五里___中", answer: "霧" }],
  },
  {
    id: "h-nature-10", category: "hanja", themeId: "h-nature", term: "潮", reading: "밀물 조", meaning: "밀물, 조수",
    background: "바닷물(氵)이 하루에 두 번씩 들어왔다 빠졌다 해요. 그중 바닷가로 밀려 들어오는 물이 '밀물'이에요.",
    difficulty: 4,
    sentences: [{ text: "春江潮水連海平(춘강조수연해평)", translation: "봄 강의 밀물(춘강조수)이 바다와 잇닿아(연해) 평평하다(평)는 뜻으로, 봄밤 강과 바다가 하나로 이어진 풍경을 그린 구절이에요.", source: "장약허(張若虛)「春江花月夜」", cloze: "春江___水連海平", answer: "潮" }],
  },

  // ── 가족·사람 (h-family) ──
  {
    id: "h-family-1", category: "hanja", themeId: "h-family", term: "祖", reading: "할아비 조", meaning: "할아버지, 조상",
    background: "아버지의 아버지, 곧 '할아버지'를 뜻해요. 더 옛날의 윗대 어른들인 '조상'이라는 뜻으로도 써요.",
    difficulty: 3,
    sentences: [{ text: "數典忘祖(수전망조)", translation: "옛 법도와 내력(전)을 따지면서 정작 제 조상(조)을 잊는다(망)는 뜻으로, 근본을 잊음을 꾸짖는 말이에요.", source: "춘추좌씨전(左傳)", cloze: "數典忘___", answer: "祖" }],
  },
  {
    id: "h-family-2", category: "hanja", themeId: "h-family", term: "孫", reading: "손자 손", meaning: "손자, 손녀",
    background: "아들이나 딸이 낳은 아이, 곧 '손자·손녀'를 뜻해요. 아들(子)이 들어 있는 게 보이지요.",
    difficulty: 3,
    sentences: [{ text: "子子孫孫(자자손손)", translation: "아들(자)의 아들, 손자(손)의 손자라는 뜻으로, 자손이 대대로 끝없이 이어짐을 이르는 말이에요.", source: "사자성어", cloze: "子子___孫", answer: "孫" }],
  },
  {
    id: "h-family-3", category: "hanja", themeId: "h-family", term: "姓", reading: "성씨 성", meaning: "성씨",
    background: "한 집안이 함께 쓰는 이름이 '성씨'예요. 김, 이, 박 같은 것이지요. 여자(女)와 태어남(生)이 합쳐졌어요.",
    difficulty: 3,
    sentences: [{ text: "平章百姓(평장백성)", translation: "온 백성(백성)을 고르게(평) 살펴 밝게(장) 다스린다는 뜻으로, 임금이 백성을 바르게 보살핌을 이르는 말이에요.", source: "서경(書經)「堯典」", cloze: "平章百___", answer: "姓" }],
  },
  {
    id: "h-family-4", category: "hanja", themeId: "h-family", term: "君", reading: "임금 군", meaning: "임금, 그대",
    background: "나라를 다스리는 '임금'을 뜻해요. 점잖은 사람을 정답게 부를 때 '그대'라는 뜻으로도 써요.",
    difficulty: 3,
    sentences: [{ text: "君子和而不同(군자화이부동)", translation: "군자(군자)는 남과 잘 어울리되(화) 무턱대고 같아지지는(동) 않는다는 뜻으로, 줏대를 지키며 어울리는 태도를 이르는 말이에요.", source: "논어(論語)", cloze: "___子和而不同", answer: "君" }],
  },
  {
    id: "h-family-5", category: "hanja", themeId: "h-family", term: "臣", reading: "신하 신", meaning: "신하",
    background: "임금을 도와 나랏일을 하는 사람이 '신하'예요. 임금 앞에서 몸을 굽힌 모습에서 나온 글자예요.",
    difficulty: 4,
    sentences: [{ text: "君臣有義(군신유의)", translation: "임금(군)과 신하(신) 사이에는 의리(의)가 있어야 한다는 뜻으로, 사람이 지켜야 할 다섯 도리(오륜) 가운데 하나예요.", source: "오륜(五倫)", cloze: "君___有義", answer: "臣" }],
  },
  {
    id: "h-family-6", category: "hanja", themeId: "h-family", term: "衆", reading: "무리 중", meaning: "무리, 많은 사람",
    background: "사람들이 아주 많이 모인 '무리'를 뜻해요. 여러 사람이 함께 있는 모습에서 나왔어요.",
    difficulty: 4,
    sentences: [{ text: "衆寡不敵(중과부적)", translation: "적은 수(과)로는 많은 무리(중)를 대적하지(적) 못한다(불)는 뜻으로, 수가 모자라 맞서 이길 수 없음을 이르는 말이에요.", source: "맹자(孟子)", cloze: "___寡不敵", answer: "衆" }],
  },
  {
    id: "h-family-7", category: "hanja", themeId: "h-family", term: "叔", reading: "아재비 숙", meaning: "삼촌, 작은아버지",
    background: "아버지의 남동생, 곧 '삼촌·작은아버지'를 뜻해요. 나보다 윗대이지만 아버지보다는 젊은 어른이지요.",
    difficulty: 4,
    sentences: [{ text: "伯仲叔季(백중숙계)", translation: "맏이(백)·둘째(중)·셋째(숙)·막내(계)라는 뜻으로, 형제의 위아래 차례를 나타내는 말이에요.", source: "사자성어", cloze: "伯仲___季", answer: "叔" }],
  },
  {
    id: "h-family-8", category: "hanja", themeId: "h-family", term: "妻", reading: "아내 처", meaning: "아내",
    background: "결혼한 남자의 짝이 되는 여자, 곧 '아내'를 뜻해요. 여자(女)가 들어 있어요.",
    difficulty: 4,
    sentences: [{ text: "糟糠之妻(조강지처)", translation: "지게미(조)와 쌀겨(강)를 함께 먹으며 고생한 아내(처)라는 뜻으로, 어려운 시절을 함께한 본처를 이르는 말이에요.", source: "후한서(後漢書)", cloze: "糟糠之___", answer: "妻" }],
  },
  {
    id: "h-family-9", category: "hanja", themeId: "h-family", term: "賓", reading: "손 빈", meaning: "손님",
    background: "집이나 잔치에 찾아온 귀한 '손님'을 뜻해요. 정성껏 대접해야 하는 반가운 사람이지요.",
    difficulty: 5,
    sentences: [{ text: "相敬如賓(상경여빈)", translation: "서로(상) 공경하기를(경) 손님(빈) 대하듯 한다(여)는 뜻으로, 부부가 예의를 지키며 아끼는 모습을 이르는 말이에요.", source: "춘추좌씨전(左傳)", cloze: "相敬如___", answer: "賓" }],
  },
  {
    id: "h-family-10", category: "hanja", themeId: "h-family", term: "朋", reading: "벗 붕", meaning: "벗, 친구",
    background: "마음을 나누는 가까운 '벗(친구)'을 뜻해요. 같은 스승에게 배운 사이를 가리키던 데서 나왔어요.",
    difficulty: 3,
    sentences: [{ text: "有朋自遠方來 不亦樂乎(유붕자원방래 불역낙호)", translation: "벗(붕)이 먼 곳(원방)에서 찾아오니(래) 또한 즐겁지 아니한가(불역낙호)라는 뜻으로, 멀리서 찾아온 벗의 반가움을 노래한 구절이에요.", source: "논어(論語)", cloze: "有___自遠方來 不亦樂乎", answer: "朋" }],
  },

  // ── 숫자 (h-number) ──
  {
    id: "h-number-1", category: "hanja", themeId: "h-number", term: "百", reading: "일백 백", meaning: "백(100)",
    background: "열(十)이 열 번 모이면 '백(100)'이 돼요. 아주 많은 수를 말할 때도 '백 가지'처럼 쓰지요.",
    difficulty: 2,
    sentences: [{ text: "百聞不如一見(백문불여일견)", translation: "백 번(백) 듣는 것(문)이 한 번(일) 보는 것(견)만 못하다(불여)는 뜻으로, 직접 보는 것이 가장 확실함을 이르는 말이에요.", source: "한서(漢書)", cloze: "___聞不如一見", answer: "百" }],
  },
  {
    id: "h-number-2", category: "hanja", themeId: "h-number", term: "千", reading: "일천 천", meaning: "천(1000)",
    background: "백(百)이 열 번 모이면 '천(1000)'이 돼요. 백보다 열 배나 큰 수예요.",
    difficulty: 2,
    sentences: [{ text: "千里之行 始於足下(천리지행 시어족하)", translation: "천 리(천리) 먼 길도 발밑(족하) 한 걸음에서 시작된다(시어)는 뜻으로, 큰일도 작은 시작에서 비롯됨을 이르는 말이에요.", source: "노자(老子)", cloze: "___里之行 始於足下", answer: "千" }],
  },
  {
    id: "h-number-3", category: "hanja", themeId: "h-number", term: "萬", reading: "일만 만", meaning: "만(10000)",
    background: "천(千)이 열 번 모이면 '만(10000)'이 돼요. '만 가지'처럼 헤아릴 수 없이 많다는 뜻으로도 써요.",
    difficulty: 3,
    sentences: [{ text: "鵬程萬里(붕정만리)", translation: "붕새(붕)가 날아갈 길(정)이 만 리(만리)라는 뜻으로, 앞날이 매우 멀고 큼을 이르는 말이에요.", source: "장자(莊子)", cloze: "鵬程___里", answer: "萬" }],
  },
  {
    id: "h-number-4", category: "hanja", themeId: "h-number", term: "億", reading: "억 억", meaning: "억",
    background: "만(萬)이 만 번 모인 아주 큰 수가 '억'이에요. 우리나라 사람 수보다도 훨씬 큰 수지요.",
    difficulty: 4,
    sentences: [{ text: "億萬斯年(억만사년)", translation: "억(억) 년 만(만) 년이라는 뜻으로, 헤아릴 수 없이 길고 오랜 세월을 이르는 말이에요.", source: "시경(詩經)", cloze: "___萬斯年", answer: "億" }],
  },
  {
    id: "h-number-5", category: "hanja", themeId: "h-number", term: "兆", reading: "조 조", meaning: "조",
    background: "억(億)이 만 번 모인, 상상하기도 힘든 큰 수가 '조'예요. 나라 살림처럼 아주 큰돈을 셀 때 써요.",
    difficulty: 5,
    sentences: [{ text: "億兆蒼生(억조창생)", translation: "억(억)과 조(조)에 이르는 수많은 백성(창생)이라는 뜻으로, 세상의 모든 사람을 이르는 말이에요.", source: "사자성어", cloze: "億___蒼生", answer: "兆" }],
  },
  {
    id: "h-number-6", category: "hanja", themeId: "h-number", term: "半", reading: "반 반", meaning: "반, 절반",
    background: "하나를 똑같이 둘로 나눈 한쪽이 '반(절반)'이에요. 사과를 반으로 가르는 그 반이지요.",
    difficulty: 2,
    sentences: [{ text: "半信半疑(반신반의)", translation: "반(반)은 믿고(신) 반(반)은 의심한다(의)는 뜻으로, 믿을지 말지 마음을 정하지 못함을 이르는 말이에요.", source: "사자성어", cloze: "___信半疑", answer: "半" }],
  },
  {
    id: "h-number-7", category: "hanja", themeId: "h-number", term: "倍", reading: "곱 배", meaning: "곱, 갑절",
    background: "어떤 수를 두 번 더한 만큼, 곧 '두 배'를 뜻해요. '세 倍, 열 倍'처럼 몇 곱절인지 말할 때 써요.",
    difficulty: 3,
    sentences: [{ text: "事半功倍(사반공배)", translation: "일(사)은 절반(반)만 하고도 성과(공)는 갑절(배)이 된다는 뜻으로, 적은 노력으로 큰 성과를 거둠을 이르는 말이에요.", source: "맹자(孟子)", cloze: "事半功___", answer: "倍" }],
  },
  {
    id: "h-number-8", category: "hanja", themeId: "h-number", term: "雙", reading: "쌍 쌍", meaning: "쌍, 둘이 짝",
    background: "둘이 짝을 이룬 것을 '쌍'이라고 해요. 젓가락 한 쌍, 신발 한 쌍처럼 짝지어 세는 말이에요.",
    difficulty: 4,
    sentences: [{ text: "文武雙全(문무쌍전)", translation: "글(문)과 무예(무)를 둘 다(쌍) 온전히 갖춤(전)이라는 뜻으로, 학문과 무예에 모두 뛰어남을 이르는 말이에요.", source: "사자성어", cloze: "文武___全", answer: "雙" }],
  },
  {
    id: "h-number-9", category: "hanja", themeId: "h-number", term: "零", reading: "영 령", meaning: "영(0)",
    background: "아무것도 없는 수 '0'을 '영(零)'이라고 해요. 비(雨)와 관련된 글자에서 '작게 떨어진다'는 뜻이 나왔어요.",
    difficulty: 4,
    sentences: [{ text: "草木零落(초목영락)", translation: "풀(초)과 나무(목)가 시들어 떨어진다(영락)는 뜻으로, 만물이 쇠하여 스러짐을 이르는 말이에요. (여기서 零은 숫자 0이 아니라 '떨어지다'라는 본래 뜻으로 쓰였어요.)", source: "굴원(屈原)「離騷」", cloze: "草木___落", answer: "零" }],
  },
  {
    id: "h-number-10", category: "hanja", themeId: "h-number", term: "數", reading: "셈 수", meaning: "수, 셈",
    background: "하나하나 헤아리는 일, 또는 헤아린 결과인 '수'를 뜻해요. '수학(數學)'에 들어가는 바로 그 글자예요.",
    difficulty: 4,
    sentences: [{ text: "不可勝數(불가승수)", translation: "이루 다(승) 셀(수) 수 없다(불가)는 뜻으로, 너무 많아 헤아릴 수 없음을 이르는 말이에요.", source: "사자성어", cloze: "不可勝___", answer: "數" }],
  },

  // ── 몸 (h-body) ──
  {
    id: "h-body-1", category: "hanja", themeId: "h-body", term: "頭", reading: "머리 두", meaning: "머리",
    background: "사람이나 동물의 가장 위에 있는 '머리'를 뜻해요. 머리(頁)와 관련된 글자예요.",
    difficulty: 3,
    sentences: [{ text: "龍頭蛇尾(용두사미)", translation: "용(용)의 머리(두)에 뱀(사)의 꼬리(미)라는 뜻으로, 시작은 거창하나 끝은 흐지부지함을 이르는 말이에요.", source: "사자성어", cloze: "龍___蛇尾", answer: "頭" }],
  },
  {
    id: "h-body-2", category: "hanja", themeId: "h-body", term: "顔", reading: "낯 안", meaning: "얼굴",
    background: "눈, 코, 입이 있는 '얼굴'을 뜻해요. 기분이 좋고 나쁨이 얼굴에 그대로 드러나지요.",
    difficulty: 4,
    sentences: [{ text: "厚顔無恥(후안무치)", translation: "얼굴(안) 가죽이 두꺼워(후) 부끄러움(치)이 없다(무)는 뜻으로, 뻔뻔하여 부끄러운 줄 모름을 이르는 말이에요.", source: "사자성어", cloze: "厚___無恥", answer: "顔" }],
  },
  {
    id: "h-body-3", category: "hanja", themeId: "h-body", term: "髮", reading: "터럭 발", meaning: "머리카락",
    background: "머리에 난 '머리카락(터럭)'을 뜻해요. 길게 흩날리는 머리털을 떠올리면 돼요.",
    difficulty: 5,
    sentences: [{ text: "白髮三千丈(백발삼천장)", translation: "흰(백) 머리카락(발)이 삼천(삼천) 길(장)이나 자랐다는 뜻으로, 근심과 시름이 그만큼 깊고 길어졌음을 과장해 나타낸 구절이에요.", source: "이백(李白)「秋浦歌」", cloze: "白___三千丈", answer: "髮" }],
  },
  {
    id: "h-body-4", category: "hanja", themeId: "h-body", term: "胸", reading: "가슴 흉", meaning: "가슴",
    background: "몸(月)의 한가운데, 심장이 있는 '가슴'을 뜻해요. 깊이 숨을 쉬면 부풀어 오르는 그곳이에요.",
    difficulty: 4,
    sentences: [{ text: "胸有成竹(흉유성죽)", translation: "가슴(흉)속에 이미 다 자란 대나무(성죽)가 있다(유)는 뜻으로, 일을 시작하기 전에 계획이 다 서 있음을 이르는 말이에요.", source: "소식(蘇軾)", cloze: "___有成竹", answer: "胸" }],
  },
  {
    id: "h-body-5", category: "hanja", themeId: "h-body", term: "腹", reading: "배 복", meaning: "배",
    background: "몸(月)에서 음식이 들어가는 '배'를 뜻해요. 너무 웃거나 배탈이 나면 아픈 바로 그곳이에요.",
    difficulty: 4,
    sentences: [{ text: "抱腹絶倒(포복절도)", translation: "배(복)를 끌어안고(포) 넘어질(절도) 만큼 크게 웃는다는 뜻으로, 몹시 우스워 참지 못함을 이르는 말이에요.", source: "사자성어", cloze: "抱___絶倒", answer: "腹" }],
  },
  {
    id: "h-body-6", category: "hanja", themeId: "h-body", term: "肩", reading: "어깨 견", meaning: "어깨",
    background: "팔이 몸에 붙는 부분, 곧 '어깨'를 뜻해요. 무거운 가방을 메면 뻐근해지는 그곳이에요.",
    difficulty: 4,
    sentences: [{ text: "摩肩接踵(마견접종)", translation: "어깨(견)가 서로 스치고(마) 발꿈치(종)가 잇닿는다(접)는 뜻으로, 사람이 빽빽이 모여 몹시 붐빔을 이르는 말이에요.", source: "전국책(戰國策)", cloze: "摩___接踵", answer: "肩" }],
  },
  {
    id: "h-body-7", category: "hanja", themeId: "h-body", term: "骨", reading: "뼈 골", meaning: "뼈",
    background: "몸을 단단하게 받쳐 주는 '뼈'를 뜻해요. 살 속에 들어 있어 우리 몸의 기둥 노릇을 하지요.",
    difficulty: 3,
    sentences: [{ text: "換骨奪胎(환골탈태)", translation: "뼈(골)를 바꾸고(환) 태(태)를 벗는다(탈)는 뜻으로, 모습이나 솜씨가 몰라보게 새로워짐을 이르는 말이에요.", source: "사자성어", cloze: "換___奪胎", answer: "骨" }],
  },
  {
    id: "h-body-8", category: "hanja", themeId: "h-body", term: "筋", reading: "힘줄 근", meaning: "힘줄, 근육",
    background: "몸을 움직이게 하는 '힘줄(근육)'을 뜻해요. 운동을 꾸준히 하면 단단해지는 부분이에요.",
    difficulty: 4,
    sentences: [{ text: "勞其筋骨(노기근골)", translation: "그(기) 힘줄(근)과 뼈(골)를 수고롭게 한다(노)는 뜻으로, 큰일을 맡기려 먼저 몸을 고되게 단련시킴을 이르는 구절이에요.", source: "맹자(孟子)", cloze: "勞其___骨", answer: "筋" }],
  },
  {
    id: "h-body-9", category: "hanja", themeId: "h-body", term: "腦", reading: "골 뇌", meaning: "뇌",
    background: "머릿속에서 생각하고 기억하게 해 주는 '뇌'를 뜻해요. 새로운 것을 배우면 점점 발달하지요.",
    difficulty: 5,
    sentences: [{ text: "肝腦塗地(간뇌도지)", translation: "간(간)과 뇌(뇌)가 흙(지)에 으깨져 칠해질(도) 만큼이라는 뜻으로, 나라를 위해 목숨을 아끼지 않고 온 힘을 다 바침을 이르는 말이에요.", source: "사기(史記)", cloze: "肝___塗地", answer: "腦" }],
  },
  {
    id: "h-body-10", category: "hanja", themeId: "h-body", term: "肺", reading: "허파 폐", meaning: "허파, 폐",
    background: "숨을 들이마시고 내쉬게 해 주는 '허파(폐)'를 뜻해요. 가슴 안에서 공기를 담았다 내보내지요.",
    difficulty: 5,
    sentences: [{ text: "肺腑之言(폐부지언)", translation: "허파(폐)와 장기(부) 속에서 우러나온 말(언)이라는 뜻으로, 마음속 깊은 곳에서 나온 진심 어린 말을 이르는 말이에요.", source: "사자성어", cloze: "___腑之言", answer: "肺" }],
  },

  // ── 시간·하늘 (h-time) ──
  {
    id: "h-time-1", category: "hanja", themeId: "h-time", term: "曉", reading: "새벽 효", meaning: "새벽",
    background: "해(日)가 막 떠오르기 시작하는 이른 아침이 '새벽'이에요. 어둠이 걷히고 환해지는 때지요.",
    difficulty: 4,
    sentences: [{ text: "春眠不覺曉(춘면불각효)", translation: "봄(춘)잠(면)에 빠져 날이 새는 것(효)을 깨닫지(각) 못한다(불)는 뜻으로, 봄날 노곤하여 늦도록 자는 정취를 그린 구절이에요.", source: "맹호연(孟浩然)「春曉」", cloze: "春眠不覺___", answer: "曉" }],
  },
  {
    id: "h-time-2", category: "hanja", themeId: "h-time", term: "昏", reading: "어두울 혼", meaning: "어둑함, 해 질 무렵",
    background: "해(日)가 져서 사방이 어둑어둑해지는 때를 뜻해요. 낮과 밤 사이, 등불을 켜는 무렵이지요.",
    difficulty: 4,
    sentences: [{ text: "昏定晨省(혼정신성)", translation: "저녁(혼)에는 잠자리를 보아 드리고(정) 새벽(신)에는 안부를 살핀다(성)는 뜻으로, 아침저녁으로 부모를 정성껏 모심을 이르는 말이에요.", source: "예기(禮記)", cloze: "___定晨省", answer: "昏" }],
  },
  {
    id: "h-time-3", category: "hanja", themeId: "h-time", term: "晝", reading: "낮 주", meaning: "낮",
    background: "해(日)가 떠 있는 환한 시간, 곧 '낮'을 뜻해요. 밤(夜)의 반대말이에요.",
    difficulty: 4,
    sentences: [{ text: "晝耕夜讀(주경야독)", translation: "낮(주)에는 밭을 갈고(경) 밤(야)에는 글을 읽는다(독)는 뜻으로, 어려운 형편에도 부지런히 일하며 공부함을 이르는 말이에요.", source: "사자성어", cloze: "___耕夜讀", answer: "晝" }],
  },
  {
    id: "h-time-4", category: "hanja", themeId: "h-time", term: "暮", reading: "저물 모", meaning: "해가 저묾",
    background: "해(日)가 풀숲 너머로 넘어가 하루가 끝나가는 때를 뜻해요. 새들이 둥지로 돌아갈 무렵이지요.",
    difficulty: 4,
    sentences: [{ text: "朝三暮四(조삼모사)", translation: "아침(조)에 셋(삼), 저녁(모)에 넷(사)을 준다는 뜻으로, 눈앞의 차이만 보고 속거나 잔꾀로 남을 농락함을 이르는 말이에요.", source: "장자(莊子)", cloze: "朝三___四", answer: "暮" }],
  },
  {
    id: "h-time-5", category: "hanja", themeId: "h-time", term: "宇", reading: "집 우", meaning: "온 하늘, 공간",
    background: "끝없이 넓게 펼쳐진 하늘과 공간을 뜻해요. '宙(주)'와 합쳐 '우주(宇宙)'라는 말을 만들어요.",
    difficulty: 4,
    sentences: [{ text: "四方上下謂之宇(사방상하위지우)", translation: "동서남북 사방(사방)과 위아래(상하)의 공간을 일러(위지) '우(宇)'라 한다는 뜻으로, '우주'의 '우'가 곧 끝없는 공간임을 풀이한 구절이에요.", source: "회남자(淮南子)", cloze: "四方上下謂之___", answer: "宇" }],
  },
  {
    id: "h-time-6", category: "hanja", themeId: "h-time", term: "宙", reading: "집 주", meaning: "끝없는 시간과 공간",
    background: "옛날부터 지금까지 이어지는 끝없는 시간을 뜻해요. '宇(우)'와 합쳐 온 세상인 '우주(宇宙)'가 돼요.",
    difficulty: 5,
    sentences: [{ text: "宇宙洪荒(우주홍황)", translation: "우주(우주)는 넓고(홍) 아득하다(황)는 뜻으로, 천지가 끝없이 크고 거칢을 이르는 천자문의 둘째 구절이에요.", source: "천자문(千字文)", cloze: "宇___洪荒", answer: "宙" }],
  },
  {
    id: "h-time-7", category: "hanja", themeId: "h-time", term: "辰", reading: "별 진", meaning: "별, 날",
    background: "밤하늘에 반짝이는 '별'을 뜻해요. 옛날에는 별을 보고 날짜와 때를 헤아렸어요.",
    difficulty: 4,
    sentences: [{ text: "譬如北辰(비여북신)", translation: "마치(비여) 북극성(북신)과 같다는 뜻으로, 덕으로 다스리면 임금이 제자리에 있어도 뭇별이 따르듯 백성이 따름을 비유한 구절이에요. (北辰에서 辰은 '신'으로 읽어요.)", source: "논어(論語)", cloze: "譬如北___", answer: "辰" }],
  },
  {
    id: "h-time-8", category: "hanja", themeId: "h-time", term: "雲", reading: "구름 운", meaning: "구름",
    background: "비(雨)와 관련된 글자예요. 하늘에 뭉게뭉게 떠다니는 '구름'을 뜻해요.",
    difficulty: 2,
    sentences: [{ text: "行雲流水(행운유수)", translation: "떠가는(행) 구름(운)과 흐르는(유) 물(수)이라는 뜻으로, 막힘이 없고 자연스러운 모습이나 솜씨를 이르는 말이에요.", source: "사자성어", cloze: "行___流水", answer: "雲" }],
  },
  {
    id: "h-time-9", category: "hanja", themeId: "h-time", term: "霞", reading: "노을 하", meaning: "노을",
    background: "비(雨)와 관련된 글자예요. 해 뜰 때나 질 때 하늘이 붉게 물드는 '노을'을 뜻해요.",
    difficulty: 5,
    sentences: [{ text: "落霞與孤鶩齊飛(낙하여고목제비)", translation: "지는 노을(낙하)이 외로운 따오기(고목)와 더불어(여) 나란히 난다(제비)는 뜻으로, 강가의 아름다운 가을 저녁 풍경을 그린 구절이에요.", source: "왕발(王勃)「滕王閣序」", cloze: "落___與孤鶩齊飛", answer: "霞" }],
  },
  {
    id: "h-time-10", category: "hanja", themeId: "h-time", term: "曆", reading: "책력 력", meaning: "달력",
    background: "날과 달, 계절의 흐름을 적어 놓은 것이 '달력(책력)'이에요. 해(日)가 들어 있어 날짜와 관련됨을 알 수 있어요.",
    difficulty: 5,
    sentences: [{ text: "治曆明時(치력명시)", translation: "책력(력, 달력)을 정비하여(치) 때(시)를 밝힌다(명)는 뜻으로, 절기와 날짜를 바로 세워 생활의 때를 일러 줌을 이르는 구절이에요.", source: "주역(周易)「革卦」", cloze: "治___明時", answer: "曆" }],
  },
];
