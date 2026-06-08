import type { Word } from "@/types";

export const latinWords: Word[] = [
  // ── 자연 (l-nature) ──
  {
    id: "l-nature-1", category: "latin", themeId: "l-nature", term: "aqua", reading: "아쿠아", meaning: "물",
    background: "'아쿠아'는 물이에요. 물고기를 키우는 '아쿠아리움(수족관)'이 여기서 나왔어요.",
    difficulty: 1,
    sentences: [{ text: "Aqua vitae.", translation: "생명의 물 — 옛 사람들이 증류한 술을 부르던 말.", source: "라틴 관용구", cloze: "___ vitae. (생명의 물)", answer: "aqua" }],
  },
  {
    id: "l-nature-2", category: "latin", themeId: "l-nature", term: "ignis", reading: "이그니스", meaning: "불",
    background: "'이그니스'는 불이에요. 불을 붙인다는 '점화(ignite)'가 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Ignis aurum probat.", translation: "불이 금을 시험한다 — 고난이 사람을 단련한다.", source: "세네카(Seneca)", cloze: "___ aurum probat. (불이 금을 시험한다)", answer: "ignis" }],
  },
  {
    id: "l-nature-3", category: "latin", themeId: "l-nature", term: "terra", reading: "테라", meaning: "땅, 흙",
    background: "'테라'는 땅이에요. 지구를 뜻하는 '테라'도 여기서 나왔어요.",
    difficulty: 1,
    sentences: [{ text: "Terra incognita.", translation: "알려지지 않은 땅 — 아직 밝혀지지 않은 미지의 영역.", source: "라틴 관용구", cloze: "___ incognita. (미지의 땅)", answer: "terra" }],
  },
  {
    id: "l-nature-4", category: "latin", themeId: "l-nature", term: "silva", reading: "실와", meaning: "숲",
    background: "'실와'는 숲이에요. 숲과 관련된 이름 '실비아'가 여기서 나왔어요.",
    difficulty: 2,
    sentences: [{ text: "Itur in antiquam silvam.", translation: "그들은 오래된 숲으로 들어간다.", source: "베르길리우스(Vergilius)「아이네이스」", cloze: "Itur in antiquam ___. (오래된 숲으로 들어간다)", answer: "silvam" }],
  },
  {
    id: "l-nature-5", category: "latin", themeId: "l-nature", term: "mare", reading: "마레", meaning: "바다",
    background: "'마레'는 바다예요. 바다와 관련된 '마린(marine)'이 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Mare nostrum.", translation: "우리의 바다 — 로마인이 지중해를 부르던 말.", source: "라틴 관용구", cloze: "___ nostrum. (우리의 바다)", answer: "mare" }],
  },
  {
    id: "l-nature-6", category: "latin", themeId: "l-nature", term: "ventus", reading: "웬투스", meaning: "바람",
    background: "'웬투스'는 바람이에요. 공기가 통하는 '벤트(vent)'가 여기서 왔어요.",
    difficulty: 3,
    sentences: [{ text: "Verba dare ventis.", translation: "말을 바람에 날려 보내다 — 약속을 헛되이 하다.", source: "오비디우스(Ovidius)", cloze: "Verba dare ___. (말을 바람에 날리다)", answer: "ventis" }],
  },
  {
    id: "l-nature-7", category: "latin", themeId: "l-nature", term: "saxum", reading: "삭숨", meaning: "바위, 돌",
    background: "'삭숨'은 단단한 바위예요.",
    difficulty: 3,
    sentences: [{ text: "Sisyphus saxum volvit.", translation: "시시포스가 바위를 굴린다 — 끝없이 되풀이되는 헛수고.", source: "그리스·로마 신화", cloze: "Sisyphus ___ volvit. (시시포스가 바위를 굴린다)", answer: "saxum" }],
  },
  {
    id: "l-nature-8", category: "latin", themeId: "l-nature", term: "flos", reading: "플로스", meaning: "꽃",
    background: "'플로스'는 꽃이에요. 꽃 가게를 뜻하는 '플로리스트(florist)'가 여기서 왔어요.",
    difficulty: 3,
    sentences: [{ text: "Flos iuventutis.", translation: "청춘의 꽃 — 인생의 한창때.", source: "라틴 관용구", cloze: "___ iuventutis. (청춘의 꽃)", answer: "flos" }],
  },
  {
    id: "l-nature-9", category: "latin", themeId: "l-nature", term: "arbor", reading: "아르보르", meaning: "나무",
    background: "'아르보르'는 나무예요. 나무를 가꾸는 '아버리스트'가 여기서 왔어요.",
    difficulty: 4,
    sentences: [{ text: "Arbor bona fructus bonos facit.", translation: "좋은 나무는 좋은 열매를 맺는다.", source: "불가타 성경(마태 7:17)", cloze: "___ bona fructus bonos facit. (좋은 나무는 좋은 열매를 맺는다)", answer: "arbor" }],
  },
  {
    id: "l-nature-10", category: "latin", themeId: "l-nature", term: "mons", reading: "몬스", meaning: "산",
    background: "'몬스'는 산이에요. 산을 뜻하는 '마운틴(mountain)'이 여기서 왔어요.",
    difficulty: 4,
    sentences: [{ text: "Parturient montes, nascetur ridiculus mus.", translation: "산들이 요동치더니 고작 우스운 쥐 한 마리가 태어난다 — 용두사미.", source: "호라티우스(Horatius)", cloze: "Parturient ___, nascetur ridiculus mus. (산들이 진통한다)", answer: "montes" }],
  },

  // ── 가족·사람 (l-family) ──
  {
    id: "l-family-1", category: "latin", themeId: "l-family", term: "pater", reading: "파테르", meaning: "아버지",
    background: "'파테르'는 아버지예요. 영어 '파더(father)'와 닮았지요.",
    difficulty: 1,
    sentences: [{ text: "Pater patriae.", translation: "조국의 아버지 — 나라를 구한 이에게 준 명예로운 칭호.", source: "라틴 관용구", cloze: "___ patriae. (조국의 아버지)", answer: "pater" }],
  },
  {
    id: "l-family-2", category: "latin", themeId: "l-family", term: "mater", reading: "마테르", meaning: "어머니",
    background: "'마테르'는 어머니예요. 영어 '마더(mother)'와 닮았지요.",
    difficulty: 1,
    sentences: [{ text: "Alma mater.", translation: "자애로운 어머니 — '모교'를 이르는 말.", source: "라틴 관용구", cloze: "Alma ___. (자애로운 어머니, 모교)", answer: "mater" }],
  },
  {
    id: "l-family-3", category: "latin", themeId: "l-family", term: "filius", reading: "필리우스", meaning: "아들",
    background: "'필리우스'는 아들이에요.",
    difficulty: 2,
    sentences: [{ text: "Hic est filius meus dilectus.", translation: "이는 내가 사랑하는 아들이다.", source: "불가타 성경(마태 3:17)", cloze: "Hic est ___ meus dilectus. (이는 내 사랑하는 아들이다)", answer: "filius" }],
  },
  {
    id: "l-family-4", category: "latin", themeId: "l-family", term: "filia", reading: "필리아", meaning: "딸",
    background: "'필리아'는 딸이에요. 아들 '필리우스'와 짝을 이루지요.",
    difficulty: 2,
    sentences: [{ text: "Qualis mater, talis filia.", translation: "그 어머니에 그 딸 — 어머니를 닮는 딸.", source: "라틴 속담", cloze: "Qualis mater, talis ___. (그 어머니에 그 딸)", answer: "filia" }],
  },
  {
    id: "l-family-5", category: "latin", themeId: "l-family", term: "frater", reading: "프라테르", meaning: "형제",
    background: "'프라테르'는 형제예요. 영어 '브라더(brother)'와 닮았지요.",
    difficulty: 2,
    sentences: [{ text: "Frater, ave atque vale.", translation: "형제여, 반갑고 또 잘 가시오 — 죽은 형을 애도하며.", source: "카툴루스(Catullus) 101", cloze: "___, ave atque vale. (형제여, 안녕 그리고 잘 가라)", answer: "frater" }],
  },
  {
    id: "l-family-6", category: "latin", themeId: "l-family", term: "soror", reading: "소로르", meaning: "자매",
    background: "'소로르'는 자매예요. 영어 '시스터(sister)'와 뿌리가 같아요.",
    difficulty: 3,
    sentences: [{ text: "Anna soror, quae me terrent insomnia!", translation: "언니 안나여, 어떤 꿈들이 나를 이리 두렵게 하는가!", source: "베르길리우스(Vergilius)「아이네이스」", cloze: "Anna ___, quae me terrent insomnia! (언니 안나여)", answer: "soror" }],
  },
  {
    id: "l-family-7", category: "latin", themeId: "l-family", term: "puer", reading: "푸에르", meaning: "소년",
    background: "'푸에르'는 남자아이예요.",
    difficulty: 2,
    sentences: [{ text: "Puer natus est nobis.", translation: "우리에게 한 아기가 태어났다.", source: "불가타 성경(이사야 9:6)", cloze: "___ natus est nobis. (우리에게 한 아기가 태어났다)", answer: "puer" }],
  },
  {
    id: "l-family-8", category: "latin", themeId: "l-family", term: "puella", reading: "푸엘라", meaning: "소녀",
    background: "'푸엘라'는 여자아이예요. 소년 '푸에르'와 짝을 이루지요.",
    difficulty: 2,
    sentences: [{ text: "Passer, deliciae meae puellae.", translation: "참새야, 내 소녀가 사랑하는 귀염둥이야.", source: "카툴루스(Catullus) 2", cloze: "Passer, deliciae meae ___. (내 소녀의 귀염둥이)", answer: "puellae" }],
  },
  {
    id: "l-family-9", category: "latin", themeId: "l-family", term: "homo", reading: "호모", meaning: "사람",
    background: "'호모'는 사람이에요. 슬기로운 사람 '호모 사피엔스'가 여기서 왔어요.",
    difficulty: 3,
    sentences: [{ text: "Homo sum, humani nihil a me alienum puto.", translation: "나는 인간이다. 인간의 일이라면 그 무엇도 남의 일로 여기지 않는다.", source: "테렌티우스(Terentius)", cloze: "___ sum, humani nihil a me alienum puto. (나는 인간이다)", answer: "homo" }],
  },
  {
    id: "l-family-10", category: "latin", themeId: "l-family", term: "rex", reading: "렉스", meaning: "왕",
    background: "'렉스'는 왕이에요. 공룡 이름 '티라노사우루스 렉스'의 '렉스'가 바로 왕이에요.",
    difficulty: 3,
    sentences: [{ text: "Rex regum.", translation: "왕들의 왕 — 가장 높은 왕.", source: "불가타 성경(요한계시록 19:16)", cloze: "___ regum. (왕들의 왕)", answer: "rex" }],
  },

  // ── 숫자 (l-number) ──
  {
    id: "l-number-1", category: "latin", themeId: "l-number", term: "unus", reading: "우누스", meaning: "하나",
    background: "'우누스'는 하나예요. 하나로 합친 '유니콘', '유니폼'이 여기서 왔어요.",
    difficulty: 1,
    sentences: [{ text: "E pluribus unum.", translation: "여럿이 모여 이룬 하나. (미국의 표어)", source: "미국 표어(라틴)", cloze: "E pluribus ___. (여럿으로 이루어진 하나)", answer: "unum" }],
  },
  {
    id: "l-number-2", category: "latin", themeId: "l-number", term: "duo", reading: "두오", meaning: "둘",
    background: "'두오'는 둘이에요. 두 사람을 뜻하는 '듀오(duo)'가 그대로 쓰여요.",
    difficulty: 1,
    sentences: [{ text: "Si duo faciunt idem, non est idem.", translation: "두 사람이 같은 일을 해도 그 결과가 똑같지는 않다.", source: "테렌티우스(Terentius)", cloze: "Si ___ faciunt idem, non est idem. (둘이 같은 일을 해도)", answer: "duo" }],
  },
  {
    id: "l-number-3", category: "latin", themeId: "l-number", term: "tres", reading: "트레스", meaning: "셋",
    background: "'트레스'는 셋이에요. 세 개로 된 '트리오(trio)'와 뿌리가 같아요.",
    difficulty: 1,
    sentences: [{ text: "Tres faciunt collegium.", translation: "셋이 모이면 하나의 모임이 된다. (로마법)", source: "로마법 격언", cloze: "___ faciunt collegium. (셋이 모임을 이룬다)", answer: "tres" }],
  },
  {
    id: "l-number-4", category: "latin", themeId: "l-number", term: "quattuor", reading: "콰투오르", meaning: "넷",
    background: "'콰투오르'는 넷이에요. 4중주 '콰르텟(quartet)'이 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Quattuor anni tempora.", translation: "한 해의 네 계절 — 봄·여름·가을·겨울.", source: "라틴 관용구", cloze: "___ anni tempora. (한 해의 네 계절)", answer: "quattuor" }],
  },
  {
    id: "l-number-5", category: "latin", themeId: "l-number", term: "quinque", reading: "퀸퀘", meaning: "다섯",
    background: "'퀸퀘'는 다섯이에요. 5중주 '퀸텟(quintet)'이 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Quinque panes et duo pisces.", translation: "빵 다섯 개와 물고기 두 마리. (오병이어)", source: "불가타 성경(마태 14:17)", cloze: "___ panes et duo pisces. (빵 다섯 개와 물고기 두 마리)", answer: "quinque" }],
  },
  {
    id: "l-number-6", category: "latin", themeId: "l-number", term: "sex", reading: "섹스", meaning: "여섯",
    background: "'섹스'는 여섯이에요. 6각형을 뜻하는 '헥사'와 비슷한 자리에 있어요.",
    difficulty: 2,
    sentences: [{ text: "Sex diebus operaberis.", translation: "엿새 동안 일하여라.", source: "불가타 성경(출애굽 20:9)", cloze: "___ diebus operaberis. (엿새 동안 일하라)", answer: "sex" }],
  },
  {
    id: "l-number-7", category: "latin", themeId: "l-number", term: "septem", reading: "셉템", meaning: "일곱",
    background: "'셉템'은 일곱이에요. 9월처럼 보이는 '셉템버(September)'는 옛 달력에서 일곱째 달이었어요.",
    difficulty: 3,
    sentences: [{ text: "Septem mirabilia mundi.", translation: "세계의 일곱 가지 불가사의.", source: "라틴 관용구", cloze: "___ mirabilia mundi. (세계 7대 불가사의)", answer: "septem" }],
  },
  {
    id: "l-number-8", category: "latin", themeId: "l-number", term: "octo", reading: "옥토", meaning: "여덟",
    background: "'옥토'는 여덟이에요. 다리가 여덟인 '옥토퍼스(문어)'가 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Octo sunt partes orationis.", translation: "라틴어 문장에는 여덟 가지 품사가 있다.", source: "도나투스 라틴 문법", cloze: "___ sunt partes orationis. (품사는 여덟 가지다)", answer: "octo" }],
  },
  {
    id: "l-number-9", category: "latin", themeId: "l-number", term: "novem", reading: "노웸", meaning: "아홉",
    background: "'노웸'은 아홉이에요. '노벰버(November)'는 옛 달력에서 아홉째 달이었어요.",
    difficulty: 3,
    sentences: [{ text: "Novem Musae.", translation: "아홉 명의 무사 여신들 — 예술과 학문을 돌보는 여신들.", source: "그리스·로마 신화", cloze: "___ Musae. (아홉 여신)", answer: "novem" }],
  },
  {
    id: "l-number-10", category: "latin", themeId: "l-number", term: "decem", reading: "데켐", meaning: "열",
    background: "'데켐'은 열이에요. '데시벨', '디셈버(December, 옛 열째 달)'가 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Decem praecepta Dei.", translation: "하느님의 열 가지 계명 — 십계명.", source: "라틴 관용구", cloze: "___ praecepta Dei. (열 가지 계명, 십계명)", answer: "decem" }],
  },

  // ── 몸 (l-body) ──
  {
    id: "l-body-1", category: "latin", themeId: "l-body", term: "manus", reading: "마누스", meaning: "손",
    background: "'마누스'는 손이에요. 손으로 한다는 '매뉴얼(manual)'이 여기서 왔어요.",
    difficulty: 1,
    sentences: [{ text: "Manus manum lavat.", translation: "손이 손을 씻는다 — 서로 돕고 의지함.", source: "세네카(Seneca)", cloze: "___ manum lavat. (손이 손을 씻는다)", answer: "manus" }],
  },
  {
    id: "l-body-2", category: "latin", themeId: "l-body", term: "pes", reading: "페스", meaning: "발",
    background: "'페스'는 발이에요. 걸어 다니는 '페달', '페디큐어'가 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Pede poena claudo.", translation: "벌은 절름발이 걸음으로 뒤따른다 — 죗값은 늦더라도 반드시 치른다.", source: "호라티우스(Horatius)", cloze: "___ poena claudo. (벌은 절뚝이는 발로 온다)", answer: "pede" }],
  },
  {
    id: "l-body-3", category: "latin", themeId: "l-body", term: "oculus", reading: "오쿨루스", meaning: "눈",
    background: "'오쿨루스'는 눈이에요. 안경과 관련된 '오큘러'가 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Oculus domini saginat equum.", translation: "주인의 눈길이 말을 살찌운다 — 주인이 직접 돌봐야 잘 된다.", source: "라틴 속담", cloze: "___ domini saginat equum. (주인의 눈이 말을 살찌운다)", answer: "oculus" }],
  },
  {
    id: "l-body-4", category: "latin", themeId: "l-body", term: "os", reading: "오스", meaning: "입, 얼굴",
    background: "'오스'는 입(이자 얼굴)이에요. 입과 관련된 '오럴(oral)'이 여기서 왔어요.",
    difficulty: 3,
    sentences: [{ text: "Os homini sublime dedit.", translation: "신은 인간에게 위를 향한 얼굴을 주어 하늘을 바라보게 했다.", source: "오비디우스(Ovidius)「변신 이야기」", cloze: "___ homini sublime dedit. (인간에게 위를 향한 얼굴을 주었다)", answer: "os" }],
  },
  {
    id: "l-body-5", category: "latin", themeId: "l-body", term: "auris", reading: "아우리스", meaning: "귀",
    background: "'아우리스'는 귀예요. 소리와 관련된 '오디오'와 친척이에요.",
    difficulty: 3,
    sentences: [{ text: "Auribus teneo lupum.", translation: "늑대를 귀로 붙잡고 있다 — 이러지도 저러지도 못함.", source: "테렌티우스(Terentius)", cloze: "___ teneo lupum. (늑대의 귀를 붙잡고 있다)", answer: "auribus" }],
  },
  {
    id: "l-body-6", category: "latin", themeId: "l-body", term: "caput", reading: "카푸트", meaning: "머리",
    background: "'카푸트'는 머리예요. 우두머리 도시 '캐피털(capital)'이 여기서 왔어요.",
    difficulty: 3,
    sentences: [{ text: "Caput mundi.", translation: "세계의 머리 — 옛 로마를 이르던 말.", source: "라틴 관용구", cloze: "___ mundi. (세계의 머리, 로마)", answer: "caput" }],
  },
  {
    id: "l-body-7", category: "latin", themeId: "l-body", term: "cor", reading: "코르", meaning: "심장, 마음",
    background: "'코르'는 심장이에요. 핵심을 뜻하는 '코어(core)'가 여기서 왔어요.",
    difficulty: 3,
    sentences: [{ text: "Inquietum est cor nostrum.", translation: "우리 마음은 (당신 안에서 쉬기까지) 평안하지 못합니다.", source: "아우구스티누스「고백록」", cloze: "Inquietum est ___ nostrum. (우리 마음은 평안치 않다)", answer: "cor" }],
  },
  {
    id: "l-body-8", category: "latin", themeId: "l-body", term: "dens", reading: "덴스", meaning: "이, 치아",
    background: "'덴스'는 이예요. 치과 의사 '덴티스트(dentist)'가 여기서 왔어요.",
    difficulty: 3,
    sentences: [{ text: "Dente lupus, cornu taurus petit.", translation: "늑대는 이빨로, 황소는 뿔로 덤빈다 — 저마다 제 무기로 싸운다.", source: "호라티우스(Horatius)", cloze: "___ lupus, cornu taurus petit. (늑대는 이빨로 덤빈다)", answer: "dente" }],
  },
  {
    id: "l-body-9", category: "latin", themeId: "l-body", term: "digitus", reading: "디기투스", meaning: "손가락",
    background: "'디기투스'는 손가락이에요. 숫자를 세던 손가락에서 '디지털(digital)'이 나왔어요.",
    difficulty: 4,
    sentences: [{ text: "Digitus Dei est hic.", translation: "이것은 하느님의 손가락(권능)이다.", source: "불가타 성경(출애굽 8:19)", cloze: "___ Dei est hic. (이것은 신의 손가락이다)", answer: "digitus" }],
  },
  {
    id: "l-body-10", category: "latin", themeId: "l-body", term: "lingua", reading: "링구아", meaning: "혀, 말",
    background: "'링구아'는 혀이자 말(언어)이에요. '랭귀지(language)'가 여기서 왔어요.",
    difficulty: 4,
    sentences: [{ text: "Quot linguas calles, tot homines vales.", translation: "할 줄 아는 언어가 많을수록 그만큼 값진 사람이다.", source: "라틴 격언", cloze: "Quot ___ calles, tot homines vales. (아는 언어가 많을수록)", answer: "linguas" }],
  },

  // ── 시간·하늘 (l-time) ──
  {
    id: "l-time-1", category: "latin", themeId: "l-time", term: "sol", reading: "솔", meaning: "해, 태양",
    background: "'솔'은 태양이에요. 태양 에너지 '솔라(solar)'가 여기서 왔어요.",
    difficulty: 1,
    sentences: [{ text: "Sol lucet omnibus.", translation: "해는 모든 사람에게 똑같이 비친다.", source: "페트로니우스(Petronius)", cloze: "___ lucet omnibus. (해는 모두에게 비친다)", answer: "sol" }],
  },
  {
    id: "l-time-2", category: "latin", themeId: "l-time", term: "luna", reading: "루나", meaning: "달",
    background: "'루나'는 달이에요. 달과 관련된 '루나(lunar)'가 여기서 왔어요.",
    difficulty: 1,
    sentences: [{ text: "Ad lunam latrat canis.", translation: "개가 달을 향해 짖는다 — 아무 소용 없는 일.", source: "라틴 속담", cloze: "Ad ___ latrat canis. (개가 달을 보고 짖는다)", answer: "lunam" }],
  },
  {
    id: "l-time-3", category: "latin", themeId: "l-time", term: "stella", reading: "스텔라", meaning: "별",
    background: "'스텔라'는 별이에요. 별과 관련된 '스텔라'가 그대로 이름에 쓰여요.",
    difficulty: 2,
    sentences: [{ text: "Stella maris.", translation: "바다의 별 — 뱃사람들이 길잡이로 삼던 별(성모 마리아의 별칭).", source: "라틴 관용구", cloze: "___ maris. (바다의 별)", answer: "stella" }],
  },
  {
    id: "l-time-4", category: "latin", themeId: "l-time", term: "caelum", reading: "카엘룸", meaning: "하늘",
    background: "'카엘룸'은 하늘이에요.",
    difficulty: 3,
    sentences: [{ text: "Fiat iustitia, ruat caelum.", translation: "하늘이 무너지더라도 정의를 행하라.", source: "라틴 격언", cloze: "Fiat iustitia, ruat ___. (하늘이 무너질지라도)", answer: "caelum" }],
  },
  {
    id: "l-time-5", category: "latin", themeId: "l-time", term: "dies", reading: "디에스", meaning: "날, 하루",
    background: "'디에스'는 날(하루)이에요. 하루 일정 '다이어리(diary)'가 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Carpe diem.", translation: "오늘을 붙잡아라 — 지금 이 순간을 소중히 하라.", source: "호라티우스(Horatius)", cloze: "Carpe ___. (오늘을 붙잡아라)", answer: "diem" }],
  },
  {
    id: "l-time-6", category: "latin", themeId: "l-time", term: "nox", reading: "녹스", meaning: "밤",
    background: "'녹스'는 밤이에요. 밤을 뜻하는 '녹턴(nocturne)'이 여기서 왔어요.",
    difficulty: 3,
    sentences: [{ text: "Ruit Oceano nox.", translation: "밤이 바다로부터 밀려 내린다.", source: "베르길리우스(Vergilius)「아이네이스」", cloze: "Ruit Oceano ___. (밤이 바다에서 내린다)", answer: "nox" }],
  },
  {
    id: "l-time-7", category: "latin", themeId: "l-time", term: "annus", reading: "안누스", meaning: "해, 1년",
    background: "'안누스'는 한 해예요. 해마다 열리는 '애뉴얼(annual)'이 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Annus mirabilis.", translation: "기적의 해 — 놀라운 일이 일어난 해.", source: "라틴 관용구", cloze: "___ mirabilis. (기적의 해)", answer: "annus" }],
  },
  {
    id: "l-time-8", category: "latin", themeId: "l-time", term: "hora", reading: "호라", meaning: "시간",
    background: "'호라'는 시간이에요. 한 '아워(hour)'가 여기서 왔어요.",
    difficulty: 2,
    sentences: [{ text: "Horas non numero nisi serenas.", translation: "나는 맑게 갠 시간만을 센다 — 좋은 때만 기억하라. (해시계의 글)", source: "해시계 명문(라틴)", cloze: "___ non numero nisi serenas. (맑은 시간만을 센다)", answer: "horas" }],
  },
  {
    id: "l-time-9", category: "latin", themeId: "l-time", term: "ver", reading: "웨르", meaning: "봄",
    background: "'웨르'는 봄이에요.",
    difficulty: 3,
    sentences: [{ text: "Una hirundo non facit ver.", translation: "제비 한 마리가 왔다고 봄이 온 것은 아니다 — 성급히 단정 짓지 말라.", source: "라틴 속담", cloze: "Una hirundo non facit ___. (제비 한 마리가 봄을 만들지 않는다)", answer: "ver" }],
  },
  {
    id: "l-time-10", category: "latin", themeId: "l-time", term: "nix", reading: "닉스", meaning: "눈(snow)",
    background: "'닉스'는 하늘에서 내리는 눈이에요.",
    difficulty: 4,
    sentences: [{ text: "Vides ut alta stet nive candidum Soracte.", translation: "보아라, 소락테 산이 깊은 눈으로 하얗게 솟아 있구나.", source: "호라티우스(Horatius)「오드」", cloze: "Vides ut alta stet ___ candidum Soracte. (깊은 눈으로 하얗게)", answer: "nive" }],
  },
];
