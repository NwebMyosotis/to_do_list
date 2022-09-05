const quotes = [
  {
    quote:
      "자신의 벗을 최선의 적으로 삼아야 한다. 그대의 벗과 적대할 때 그대의 마음은 벗을 더없이 가깝게 여겨야 한다",
    author: "프리드리히 니체",
  },
  {
    quote: "교육이 신사를 만들기 시작하고, 대화는 신사를 완성시킨다.",
    author: "토마스 풀러",
  },
  {
    quote:
      "누가 경기를 시작했는지는 중요하지 않다. 누가 경기를 끝냈느냐가 중요하다.",
    author: "존 우든",
  },
  {
    quote:
      "무언가를 위해 목숨을 버릴 각오가 되어 있지 않는 한 그것이 삶의 목표라는 어떤 확신도 가질 수 없다.",
    author: "체 게바라",
  },
  {
    quote:
      "종교서적이든 아니든 책을 크리스마스 선물로 주라. 책은 살찔 염려도 전혀 없고 죄책감에 시달리는 일도 거의 없고 영원히 개인소장할 수 있다.",
    author: "레노어 허시",
  },
  {
    quote:
      "능수능란하고 용감한 자들은 군지휘관으로 길렀다. 민첩하고 유연한 자들은 말을 다루도록 했다. 능숙하지 않은 자들은 작은 채찍을 주어 양치기가 되게 하였다.",
    author: "칭기스칸",
  },
  {
    quote: "어느 나라에서든 부자는 땅을 기어다니는 벌레다.",
    author: "G.K.체스터튼",
  },
  {
    quote:
      "경험은 인간에게 일어나는 일이 아니라, 일어나는 일에 대해 인간이 하는 행동이다.",
    author: "올더스 헉슬리",
  },
  {
    quote:
      "나는 토지를 소유하고 그것을 망치지 않는 것이 모두가 소유하고 싶어하는 가장 아름다운 예술이라고 생각한다.",
    author: "앤디 워홀",
  },
  {
    quote:
      "외부로부터 갈채만 구하는 사람은 자기의 모든 행복을 타인의 보관에 의탁하고 있다.",
    author: "데일 카네기",
  },
  {
    quote: "가장 큰 실수는 능력 이상으로 친절하려 노력하는 것이다.",
    author: "윌터 배젓",
  },
];
const quoteSpan = document.querySelector("#quotes");
const authorSpan = document.querySelector("#author");

function getQuote() {
  let quotesNum = Math.floor(Math.random() * quotes.length);
  let quote = quotes[quotesNum].quote;
  let author = quotes[quotesNum].author;
  quoteSpan.innerText = quote;
  authorSpan.innerText = `-${author}-`;
}

getQuote();

const returnSpan = document.querySelector("#return_icon");

returnSpan.addEventListener("click", getQuote);
