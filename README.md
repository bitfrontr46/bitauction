## GitHub 통한 버전 관리

1번 Centralized Workflow로 관리 예정. [GitHub 워크플로우 예시](https://lhy.kr/git-workflow).

- `git branch(이름)` 통해 여러 branch 남긴 후 관리. <br />
- `git commit -m "(커밋 내용)"`자세히, 자주 커밋할 것.

## `git l` 설정 방법

1) `nano ~/.gitconfig`을 열어주세요.
2) 아래 내용을 입력하면, `git l` 단축명령어를 사용할 수 있습니다.
`[alias]`
`l = log --all --graph --oneline`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
