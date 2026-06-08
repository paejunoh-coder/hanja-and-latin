import type { Theme } from "@/types";

export const themes: Theme[] = [
  // 한자 테마
  { id: "h-nature", category: "hanja", name: "자연", description: "숲, 호수, 바위, 안개처럼 자연을 이루는 글자", order: 1 },
  { id: "h-family", category: "hanja", name: "가족·사람", description: "할아버지, 손자, 임금과 신하 등 사람 사이의 글자", order: 2 },
  { id: "h-number", category: "hanja", name: "숫자", description: "백, 천, 만처럼 큰 수와 셈을 나타내는 글자", order: 3 },
  { id: "h-body", category: "hanja", name: "몸", description: "머리, 얼굴, 뼈, 뇌처럼 몸을 이루는 글자", order: 4 },
  { id: "h-time", category: "hanja", name: "시간·하늘", description: "새벽, 낮, 우주, 노을처럼 시간과 하늘의 글자", order: 5 },

  // 라틴어 테마
  { id: "l-nature", category: "latin", name: "자연 (Nature)", description: "숲, 물, 불 등 자연을 뜻하는 라틴어", order: 1 },
  { id: "l-family", category: "latin", name: "가족·사람 (People)", description: "아버지, 어머니, 사람을 뜻하는 라틴어", order: 2 },
  { id: "l-number", category: "latin", name: "숫자 (Numbers)", description: "하나, 둘, 셋… 수를 뜻하는 라틴어", order: 3 },
  { id: "l-body", category: "latin", name: "몸 (Body)", description: "손, 발, 눈 등 몸을 뜻하는 라틴어", order: 4 },
  { id: "l-time", category: "latin", name: "시간·하늘 (Sky)", description: "해, 달, 해(年) 등 시간과 하늘의 라틴어", order: 5 },

  // 사자성어 테마
  { id: "i-effort", category: "idiom", name: "노력·끈기", description: "포기하지 않고 노력하는 마음을 담은 성어", order: 1 },
  { id: "i-friend", category: "idiom", name: "우정·관계", description: "친구와 사람 사이의 정을 담은 성어", order: 2 },
  { id: "i-lesson", category: "idiom", name: "어리석음·교훈", description: "어리석음을 경계하고 교훈을 주는 성어", order: 3 },
  { id: "i-nature", category: "idiom", name: "자연·세상 이치", description: "세상이 돌아가는 이치를 담은 성어", order: 4 },
  { id: "i-wisdom", category: "idiom", name: "말·지혜", description: "지혜롭게 말하고 행동하는 성어", order: 5 },
];
