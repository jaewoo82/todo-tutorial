2일차 교육 내용
# PPT 만들기

## Plugin으로 document-skills 설치하고 PPT 만들기
- claude도 마켓 플레이스와 플러그인이 있다.
- 플러그인을 설치하고 PPT를 만들 수 있다.
- 그리고 프로젝트 코드를 통째로 참고해서 만들게끔 "이 프로젝트 소개 발표 자료를 PPT로 만들어줘"와 같이 명령 할 수 있다.
- https://www.skills.sh/ 에서 다양한 스킬을 받아 올 수 있다.


## laude에게 터미널 도구 빌려주기 | CLI 연결
- gh는 git hub를 의미하는 것.
- git hub에 AI가 접근해서 처리 할 수 있게 통로를 만들어 주는 것.

## Tool 늘리기
- MCP : model context protocol
- aside라는 브라우저가 있는데 연결해서 사용하면 아주 강력하다고 함.

## AI 검증 수단
- 크롬 제어권을 AI에게 부여하고 검증을 시킨다.

## Subagent: 메인과 분리된 컨텍스트로 위임
- Subagent(서브에이전트)는 메인과 완전히 분리된 자체 컨텍스트 윈도우에서 작업하고, 작업이 끝나면 결론만 반환하는 AI 세션입니다. 탐색 중 읽은 수십 개 파일은 Subagent의 컨텍스트에 남고, 메인에는 결론 텍스트만 추가됩니다.
- Subagent 안에서 파일을 20개 읽든 100개 읽든, 메인 컨텍스트에는 영향이 없습니다. Subagent의 컨텍스트는 작업이 끝나면 사라지고, 메인에는 결론만 남습니다.

## Custom Agent: 미리 만드는 Sub-agent
- Claude에서 부르는 또 다른 claude
- 완전 분리해서 객관적으로 처리가 필요한 경우 sub-agent를 사용하는게 좋다.

## Sub-agent를 피해야하는 경우
- Subagent도 만능은 아닙니다. 별도 AI 세션을 여는 만큼 준비 시간이 들고, 메인의 대화 맥락 전체를 알지 못합니다.
- Custom agent에서도 skill을 부를 수 있다.

## 배포
- vercel (?)에 배포. 호스팅 같은건가??
- ToDo를 GitHub으로 올리고, vercel이 GitHub을 바라보고 서비스한다.
- CI/CD의 기능도 있는 듯(?)

# Claude code desktop

## 