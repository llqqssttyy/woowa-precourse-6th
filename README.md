# 🐼 우아한테크코스 10개월의 기록

## 레벨 3 - 팀 프로젝트(크루루)

> 2주 단위의 스프린트를 총 4회 진행하며 공통 요구사항을 수행하고,
> 스스로 정의한 문제를 팀원과 함께 해결해 나갑니다.

### 🗓️ 기간

2024.07.03 - 2024.08.23

### 📝 모아 보기

#### 프로젝트 이름

[🔗 크루루: 복잡한 리크루팅, 간편하게✨](https://www.cruru.kr/)

#### 주요 기능

<table>
  <thead>
    <th>기능</th>
    <th>설명</th>
  </thead>
  
  <tbody>
    <tr>
      <td><b>공고 생성 및 수정</b></td>
      <td>
      - 공고 상세 정보와 지원자에게 받을 지원서 양식을 작성하여 공고를 생성할 수 있습니다.<br/> 
      - 생성된 공고는 퍼블릭 URL로 게시되어 누구나 접근할 수 있습니다.
      </td>
    </tr>
    <tr>
      <td><b>지원자 관리</b></td>
      <td>
        - 이름 검색, 정렬, 필터링 기능을 통해 원하는 지원자를 빠르게 찾을 수 있습니다.<br/>
        - 각 지원자에 대해 모집 단계 변경, 불합격 처리, 이메일 전송 등의 기능을 제공하며, 다중 선택 작업도 지원합니다.
      </td>
    </tr>
    <tr>
      <td><b>지원자 상세 정보 모달</b></td>
      <td>
      - 지원자가 제출한 지원서(자기소개서)를 검토하고 평가를 작성할 수 있는 창입니다. <br/>
      - 이 모달에서 모집 단계를 변경하거나 불합격 처리를 진행할 수 있으며, 이는 칸반 보드와 동일한 방식으로 동작합니다.
      </td>
    </tr>
    <tr>
      <td><b>공고 및 지원서 보기</b></td>
      <td>- 지원자는 리크루터가 생성한 공고의 상세 정보를 확인하고 필요한 정보를 입력하여 지원할 수 있습니다.</td>
    </tr>
  </tbody>
</table>

#### 공통 요구사항 및 학습 목표

<table>
  <thead>
    <th>스프린트</th>
    <th>공통 요구사항</th>
    <th>기술 스택</th>
  </thead>

  <tbody>
    <tr>
      <td>1️⃣ 🏃</td>
      <td>
        - <a href="https://github.com/woowacourse-teams/2024-cruru/wiki/Webpack-%EA%B8%B0%EB%B0%98%EC%9D%98-React-&-Typescript-%ED%99%98%EA%B2%BD-%EC%85%8B%ED%8C%85">Webpack 기반의 React & TypeScript 환경 세팅</a><br/>
        - <a href="https://github.com/woowacourse-teams/2024-cruru/wiki/Frontend-%EC%BD%94%EB%93%9C-%EB%B0%8F-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%BB%A8%EB%B2%A4%EC%85%98">개발(코드 컨벤션 등) 문서 만들기</a><br/>
        - <a href="https://github.com/woowacourse-teams/2024-cruru/wiki/%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%B0%A9%EB%B2%95-%EC%84%A0%ED%83%9D-%EB%B0%8F-%EC%9D%B4%EC%9C%A0">스타일링 방법 선택 및 이유 정리</a><br/>
      </td>
      <td>
        - Webpack + React + TS<br/>
        - Emotion<br/>
        - Tanstack Query<br/>
      </td>
    </tr>
    <tr>
      <td>2️⃣ 🏃</td>
      <td>
        <a href="https://github.com/woowacourse-teams/2024-cruru/wiki/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%B9%8C%EB%93%9C-%EB%B0%B0%ED%8F%AC-%ED%99%98%EA%B2%BD-%EB%B0%8F-CI-%EA%B5%AC%EC%B6%95">
        - AWS에서 프론트엔드 리소스 빌드 및 배포 환경 구축<br/>
        - 테스트 전략 수립 및 CI 프로세스 정립<br/>
        </a>
      </td>
      <td>
        - CloudFront + S3<br/>
        - GitHub Action<br/>
        - Storybook<br/>
      </td>
    </tr>
    <tr>
      <td>3️⃣ 🏃</td>
      <td>
        <a href+="https://github.com/woowacourse-teams/2024-cruru/wiki/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EC%97%90%EC%84%9C%EC%9D%98-%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95-feat-Sentry,-GA">- 모니터링 및 디버깅할 수 있는 환경 구축<br/></a>
      </td>
      <td>
        - Sentry<br/>
      </td>
    </tr>
    <tr>
      <td>4️⃣ 🏃</td>
      <td>
        - 운영 개발 서버 빌드 및 배포 환경 구분<br/>
        - 시맨틱 버저닝 적용, 사용자가 가장 최신 배포 버전을 항상 바라볼 수 있도록 세팅<br/>
      </td>
      <td>
        - Webpack `contenthash`<br/>
        - CloudFront `cache invalidation`<br/>
      </td>
    </tr>
  </tbody>
</table>

<br/>

---

<br/>

> 레벨 1과 레벨 2에서는 하나의 미션을 2단계로 진행하며
>
> **페어 프로그래밍으로 피드백 주기를 줄이고**, (step 1)  
> **코드 리뷰를 통해 소통하며 코드 품질을 높이는 경험을 쌓습니다.** (step 2)

<br/>

## 레벨 2

### 🗓️ 기간

2024.02.13 - 2024.04.01

### 📝 모아 보기

<table>
  <thead>
    <th>미션</th>
    <th>저장소</th>
    <th>PR(코드리뷰)</th>
    <th>학습 키워드</th>
  </thead>

  <tbody>
    <tr>
      <td>👟 상품 목록</td>
      <td>
        <a href="https://github.com/woowacourse/react-shopping-products/tree/llqqssttyy">repo</a>
      </td>
      <td>
        <a href="https://github.com/woowacourse/react-shopping-products/pull/14">step1</a>
        <a href="https://github.com/woowacourse/react-shopping-products/pull/68">step2</a>
      </td>
      <td>
        - react query<br/>
        - msw mocking<br/>
        - 사용하는 라이브러리가 바뀌어도 변경이 적은 구조 고민하기<br/>
      </td>
    </tr>
    <tr>
      <td>🛒 장바구니</td>
      <td>
      <a href="https://github.com/woowacourse/react-shopping-cart/tree/llqqssttyy">repo</a></td>
      </td>
      <td>
        <a href="https://github.com/woowacourse/react-shopping-cart/pull/270">step1</a>
        <a href="https://github.com/woowacourse/react-shopping-cart/pull/314">step2</a>
      </td>
      <td>
        - recoil<br/>
        - 전역 상태와 파생 상태 구분하기<br/>
      </td>
    </tr>
    <tr>
      <td>💳 페이먼츠 모듈</td>
      <td>
      <a href="https://github.com/woowacourse/react-modules/tree/llqqssttyy">repo</a></td>
      </td>
      <td>
        <a href="https://github.com/woowacourse/react-modules/pull/18">step1</a>
        <a href="https://github.com/woowacourse/javascript-lotto/pull/331">step2</a>
      </td>
      <td>
        - 컴포넌트와 훅 로직을 npm에 배포하기<br/>
        - 어떤 props를 만들어야 할지 DX 측면에서 고려하기<br/>
        - 복잡한 카드 브랜드 검사 로직 객체로 추상화 하기
      </td>
    </tr>
    <tr>
      <td>💳 페이먼츠</td>
      <td><a href="https://github.com/woowacourse/react-payments/tree/llqqssttyy">repo</a></td>
      <td>
        <a href="https://github.com/woowacourse/react-payments/pull/360">step1</a>
        <a href="https://github.com/woowacourse/react-payments/pull/390">step2</a>
      </td>
      <td>
        - Storybook을 사용한 컴포넌트 테스트<br/>
        - Form의 기능을 커스텀 훅으로 관리하기<br/>
      </td>
    </tr>
    <tr>
      <td>개발 밖의 '나'를 계발해야 하는 이유</td>
      <td><a href="https://github.com/llqqssttyy/woowa-writing/blob/llqqssttyy/Level2.md">link</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<br/>

## 레벨 1

### 🗓️ 기간

2024.02.13 - 2024.04.01

### 🎯 목표

- 작은 규모의 어플리케이션을 만들어 보며 JS/TS 주요 문법을 학습한다.
- 웹 표준을 준수하는 UI를 구현하고, 프론트엔드 개발자로서 고려해야 할 UX에 대해 고민해본다.
- E2E 테스트와 단위 테스트 코드를 작성해보고, 이를 기반으로 리팩터링하며 테스트 코드의 필요성을 경험해본다.

### 📝 모아 보기

<table>
  <thead>
    <th>미션</th>
    <th>저장소</th>
    <th>PR(코드리뷰)</th>
    <th>학습 키워드</th>
  </thead>

  <tbody>
    <tr>
      <td>🎬 영화 리뷰</td>
      <td>
        <a href="https://github.com/llqqssttyy/javascript-movie-review/tree/llqqssttyy">repo</a>
      </td>
      <td>
        <a href="https://github.com/woowacourse/javascript-movie-review/pull/113">step1</a>
        <a href="https://github.com/woowacourse/javascript-movie-review/pull/153">step2</a>
      </td>
      <td>
        - 반응형 웹 구현하기<br/>
        - 프론트엔드에서의 비동기 처리<br/>
        - API 통신 시 발생 가능한 다양한 문제에 대응하기<br/>
      </td>
    </tr>
    <tr>
      <td>🍴 점심 뭐 먹지</td>
      <td>
      <a href="https://github.com/llqqssttyy/javascript-lunch/tree/llqqssttyy">repo</a></td>
      </td>
      <td>
        <a href="https://github.com/woowacourse/javascript-lunch/pull/131">step1</a>
        <a href="https://github.com/woowacourse/javascript-lunch/pull/167">step2</a>
      </td>
      <td>
        - 재사용할 수 있는 컴포넌트<br/>
        - typescript<br/>
        - cypress를 활용한 E2E 테스트<br/>
      </td>
    </tr>
    <tr>
      <td>💸 로또</td>
      <td>
      <a href="https://github.com/llqqssttyy/javascript-lotto/tree/llqqssttyy">repo</a></td>
      </td>
      <td>
        <a href="https://github.com/woowacourse/javascript-lotto/pull/291">step1</a>
        <a href="https://github.com/woowacourse/javascript-lotto/pull/331">step2</a>
      </td>
      <td>
        - UI와 도메인 영역을 분리할 수 있는 설계<br/>
        - 웹 컴포넌트 API<br/>
        - 웹 뷰에서 UI 고려하기
      </td>
    </tr>
    <tr>
      <td>🚗 자동차 경주</td>
      <td><a href="https://github.com/llqqssttyy/javascript-racingcar/tree/llqqssttyy">repo</a></td>
      <td>
        <a href="https://github.com/woowacourse/javascript-racingcar/pull/256">step1</a>
        <a href="https://github.com/woowacourse/javascript-racingcar/pull/307">step2</a>
      </td>
      <td>
        - eslint<br/>
        - 단위 테스트(테스트하기 좋은 코드란?)<br/>
        - domain 로직과 view 로직 분리하기<br/>
      </td>
    </tr>
    <tr>
      <td>✒️ 완벽주의에 대한 문제 인식하기</td>
      <td><a href="https://github.com/llqqssttyy/woowa-writing/blob/llqqssttyy/Level1.md">link</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<br/>
