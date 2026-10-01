(() => {
  const D = (w, t, tag, m, s, intro, use, signals, traps, steps, code, q, problem) => ({w, t, tag, m, s, intro, use, signals, traps, steps, code, q, problem});
  const P = (title, level, prompt, sample, plan, code, complexity) => ({title, level, prompt, sample, plan, code, complexity});
  const DAYS = [
    D(1, "복잡도와 입력 크기", "설계 기초", 60, "제한 시간 안에 가능한 풀이의 상한을 먼저 정합니다.",
      "복잡도는 수학 기호를 외우는 파트가 아니라 어떤 풀이를 버릴지 결정하는 필터입니다. 입력이 10만 개인데 모든 쌍을 비교하면 대략 100억 번의 비교가 생깁니다. 반대로 한 번 순회하거나 정렬 한 번을 섞는 풀이는 현실적인 후보가 됩니다.",
      "문제를 읽고 n, 간선 수, 쿼리 수, 값의 범위를 표시한 뒤 내 풀이가 최악의 경우 몇 번 반복하는지 먼저 계산합니다.",
      ["n이 크다", "모든 쌍 비교가 떠오른다", "시간 제한이 빡빡하다"], ["평균 케이스만 봄", "반복문 안의 정렬·슬라이싱 비용을 무시함"],
      [["O(1)", "해시 조회"], ["O(n)", "한 번 순회"], ["O(n log n)", "정렬·힙"], ["O(n²)", "모든 쌍"]],
      "seen = set()\nfor x in nums:\n    if target - x in seen:\n        return True\n    seen.add(x)",
      ["n=100,000인 배열에서 현실적인 후보는?", ["O(2ⁿ)", "O(n²)", "O(n log n)"], 2, "정렬이나 한두 번의 순회가 가능한 O(n log n) 이하를 먼저 검토합니다."],
      P("목표 합 존재 여부", "기초 · 해시", "정수 배열 nums와 target이 주어집니다. 서로 다른 두 원소의 합이 target이면 True를 반환하세요.", ["nums=[8,1,4,6,10], target=10", "True"],
        ["완전 탐색은 모든 쌍을 보므로 O(n²)입니다.", "한 번 순회하면서 target-x가 이미 나왔는지 set에서 확인합니다.", "확인 후 현재 값을 set에 넣어 같은 원소를 두 번 쓰는 실수를 막습니다."],
        "def has_pair_sum(nums, target):\n    seen = set()\n    for x in nums:\n        if target - x in seen:\n            return True\n        seen.add(x)\n    return False", "시간 O(n), 공간 O(n)")),
    D(1, "배열과 문자열", "선형 구조", 55, "순서가 있는 데이터에서 인덱스, 구간, 누적 상태를 다룹니다.",
      "배열 문제는 대부분 어느 위치를 보고 있는가와 지금까지 무엇을 기억해야 하는가로 나뉩니다. 문자열도 문자 배열처럼 접근할 수 있지만 Python 문자열은 불변이라 반복 연결을 하면 비용이 커질 수 있습니다.",
      "인덱스가 답에 필요하면 enumerate를 쓰고, 연속 구간이면 left/right 경계를 먼저 정의합니다. 새 문자열은 리스트에 모았다가 마지막에 join합니다.",
      ["연속 구간", "인덱스 차이", "문자열 변환"], ["[l,r)와 [l,r] 혼동", "문자열 반복 연결"],
      [["순회", "값과 인덱스"], ["구간", "시작·끝 경계"], ["누적", "이전 결과 재사용"]],
      "chars = []\nfor ch in reversed(text):\n    chars.append(ch)\nanswer = ''.join(chars)",
      ["배열의 연속 구간을 표현하기 가장 자연스러운 정보는?", ["시작과 끝 인덱스", "모든 순열", "부모 노드"], 0, "연속 구간은 보통 left와 right 두 경계로 표현합니다."],
      P("가장 긴 같은 문자 구간", "기초 · 순회", "문자열 s에서 같은 문자가 연속으로 이어지는 가장 긴 길이를 구하세요.", ["s='aaabbccccd'", "4"],
        ["현재 문자가 이전 문자와 같으면 현재 길이를 늘립니다.", "다르면 현재 길이를 1로 초기화합니다.", "매 위치에서 최대 길이를 갱신합니다."],
        "def longest_run(s):\n    if not s:\n        return 0\n    best = cur = 1\n    for i in range(1, len(s)):\n        cur = cur + 1 if s[i] == s[i - 1] else 1\n        best = max(best, cur)\n    return best", "시간 O(n), 공간 O(1)")),
    D(1, "해시 맵과 집합", "빠른 조회", 60, "존재 여부, 빈도, 마지막 위치를 한 번의 순회로 관리합니다.",
      "해시는 찾는 데 오래 걸리는 정보를 미리 저장해 두는 장치입니다. 리스트에서 매번 찾으면 O(n)이지만 set과 dict는 평균적으로 O(1)에 조회합니다. 그래서 이중 반복을 한 번의 순회로 줄이는 대표 도구입니다.",
      "값이 나왔는지만 필요하면 set, 값에 대응하는 횟수·위치·목록이 필요하면 dict를 씁니다.",
      ["중복 확인", "빈도 계산", "이전에 본 값"], ["없는 키 접근", "카운트가 0이 된 키 방치"],
      [["빈도", "값 → 등장 횟수"], ["위치", "값 → 마지막 인덱스"], ["존재", "봤던 값인지 확인"]],
      "freq = {}\nfor x in nums:\n    freq[x] = freq.get(x, 0) + 1",
      ["중복 값의 존재 여부만 확인할 때 가장 알맞은 자료구조는?", ["set", "queue", "heap"], 0, "값의 존재만 필요하면 집합이 의도를 가장 잘 드러냅니다."],
      P("주문 빈도 1위 상품", "기초 · 빈도", "orders에서 가장 많이 등장한 상품명을 반환하세요. 동률이면 사전순으로 가장 빠른 상품입니다.", ["orders=['pen','cup','pen','book','cup','pen']", "'pen'"],
        ["dict로 상품별 등장 횟수를 셉니다.", "가장 큰 빈도를 찾되 동률은 상품명 오름차순으로 처리합니다.", "정렬 키는 (-빈도, 상품명)으로 생각할 수 있습니다."],
        "def most_ordered(orders):\n    freq = {}\n    for item in orders:\n        freq[item] = freq.get(item, 0) + 1\n    return min(freq, key=lambda item: (-freq[item], item))", "시간 O(n), 공간 O(k)")),
    D(1, "스택과 큐", "선형 구조", 60, "최근 항목 우선과 먼저 온 항목 우선을 구분합니다.",
      "스택은 마지막에 들어온 것을 먼저 꺼내는 구조라 괄호, 뒤로가기, 되돌리기, 단조 스택 문제에 자주 나옵니다. 큐는 먼저 온 것을 먼저 꺼내므로 순서대로 처리해야 하는 작업과 BFS에 맞습니다.",
      "최근 상태와 짝을 맞추면 스택, 도착 순서를 보존하면 큐를 씁니다. Python 큐는 리스트 pop(0) 대신 deque를 사용합니다.",
      ["괄호 짝", "최근 값 비교", "작업 대기열"], ["빈 스택 pop", "list.pop(0)로 큐 구현"],
      [["Stack", "마지막 입력부터"], ["Queue", "첫 입력부터"], ["Deque", "양끝 삽입·삭제"]],
      "from collections import deque\nqueue = deque([start])\nnode = queue.popleft()",
      ["가장 먼저 들어온 작업부터 처리해야 한다면?", ["스택", "큐", "집합"], 1, "FIFO 순서가 필요한 작업은 큐로 모델링합니다."],
      P("올바른 괄호 문자열", "기초 · 스택", "괄호 문자열 s가 올바르면 True를 반환하세요. 괄호는 (), {}, [] 세 종류입니다.", ["s='({[]})'", "True"],
        ["여는 괄호는 스택에 넣습니다.", "닫는 괄호가 나오면 스택 마지막 값과 짝이 맞는지 확인합니다.", "문자열을 다 본 뒤 스택이 비어 있어야 합니다."],
        "def valid_brackets(s):\n    pair = {')': '(', '}': '{', ']': '['}\n    stack = []\n    for ch in s:\n        if ch in '({[':\n            stack.append(ch)\n        elif not stack or stack.pop() != pair[ch]:\n            return False\n    return not stack", "시간 O(n), 공간 O(n)")),
    D(1, "정렬과 정렬 키", "전처리", 55, "데이터에 순서를 부여해 다음 판단을 단순하게 만듭니다.",
      "정렬은 답을 바로 주기도 하지만, 더 자주 다음 알고리즘을 가능하게 만드는 전처리입니다. 인접 비교, 그리디, 투 포인터가 정렬 뒤에 쉬워지는 경우가 많습니다.",
      "무엇을 1순위로 비교할지 말로 적고 튜플 키로 옮깁니다. 오름차순과 내림차순이 섞이면 숫자는 음수 키를 쓰면 단순합니다.",
      ["최소·최대 기준", "인접 비교", "동률 조건"], ["동률 조건 누락", "원래 인덱스 유실"],
      [["기본", "오름차순"], ["다중 기준", "(1순위, 2순위)"], ["역순", "reverse 또는 음수 키"]],
      "meetings.sort(key=lambda x: (x[1], x[0]))",
      ["회의를 종료 시각, 같으면 시작 시각 순으로 정렬하는 키는?", ["(start, end)", "(end, start)", "end + start"], 1, "정렬 튜플은 앞의 원소부터 비교하므로 (end, start)입니다."],
      P("가장 가까운 두 수의 차이", "기초 · 정렬", "nums에서 서로 다른 두 원소의 차이 절댓값 중 최솟값을 구하세요.", ["nums=[8,1,5,14,10]", "2"],
        ["정렬하면 값이 가까운 후보는 서로 이웃합니다.", "인접한 두 값의 차이만 비교합니다.", "모든 쌍을 보지 않아도 됩니다."],
        "def min_gap(nums):\n    nums.sort()\n    best = float('inf')\n    for i in range(1, len(nums)):\n        best = min(best, nums[i] - nums[i - 1])\n    return best", "시간 O(n log n), 공간 O(1)")),
    D(1, "이분 탐색", "탐색", 65, "정렬된 범위 또는 단조로운 답의 범위를 절반씩 줄입니다.",
      "이분 탐색의 본질은 정렬보다 한쪽 절반을 버릴 수 있는 근거입니다. 값 찾기는 target 위치를 찾는 것이고, 답 이분 탐색은 어떤 값 x가 가능하면 그보다 큰 값도 가능하거나 반대로 작아지는 단조성을 이용합니다.",
      "lo와 hi가 무엇을 의미하는지, 반복이 끝났을 때 lo가 어떤 값인지 먼저 정합니다.",
      ["정렬된 배열", "최소 가능한 값", "가능/불가능 경계"], ["포함 범위 혼동", "가능할 때 이동 방향 반대"],
      [["범위", "lo와 hi"], ["판정", "mid가 가능한가"], ["축소", "절반 제거"]],
      "lo, hi = 0, len(a)\nwhile lo < hi:\n    mid = (lo + hi) // 2\n    if a[mid] < target:\n        lo = mid + 1\n    else:\n        hi = mid",
      ["답에 대한 이분 탐색이 가능하려면 가장 중요한 성질은?", ["그래프가 연결됨", "판정 결과의 단조성", "값이 모두 다름"], 1, "어느 지점부터 가능/불가능이 한 방향으로 바뀌어야 범위를 절반씩 버릴 수 있습니다."],
      P("예산 상한 정하기", "실전 · 답 이분 탐색", "요청 예산 requests와 총 예산 total이 주어집니다. 각 요청은 상한 cap을 넘으면 cap만 배정합니다. 가능한 가장 큰 cap을 구하세요.", ["requests=[120,110,140,150], total=485", "127"],
        ["cap이 커질수록 배정 합도 커지는 단조성이 있습니다.", "mid 상한으로 계산한 합이 total 이하이면 더 큰 상한을 시도합니다.", "초과하면 상한을 낮춥니다."],
        "def budget_cap(requests, total):\n    lo, hi = 0, max(requests)\n    answer = 0\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        used = sum(min(x, mid) for x in requests)\n        if used <= total:\n            answer = mid\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return answer", "시간 O(n log M), 공간 O(1)")),
    D(1, "투 포인터와 슬라이딩 윈도", "구간", 70, "두 경계만 움직여 연속 구간의 중복 계산을 제거합니다.",
      "연속 구간을 매번 처음부터 다시 계산하면 같은 원소를 여러 번 보게 됩니다. 슬라이딩 윈도는 오른쪽으로 값을 하나 넣고, 조건을 깨면 왼쪽에서 값을 빼며 현재 구간 상태를 유지합니다.",
      "연속 구간, 부분 배열, 가장 긴/짧은 길이가 보이면 left와 right가 각각 언제 움직이는지 먼저 씁니다.",
      ["연속 부분 배열", "합이 K 이하", "가장 긴 구간"], ["음수가 있으면 합 단조성 깨짐", "left를 한 번만 움직여 조건 미회복"],
      [["확장", "right 추가"], ["축소", "조건 위반 시 left 이동"], ["기록", "답 갱신"]],
      "left = total = best = 0\nfor right, x in enumerate(nums):\n    total += x\n    while total > limit:\n        total -= nums[left]\n        left += 1\n    best = max(best, right-left+1)",
      ["고정 길이 구간 합을 매번 다시 더하지 않는 방법은?", ["백트래킹", "슬라이딩 윈도", "위상 정렬"], 1, "빠지는 값은 빼고 들어오는 값은 더해 O(1)로 구간 상태를 갱신합니다."],
      P("합이 K 이하인 가장 긴 구간", "실전 · 슬라이딩 윈도", "양의 정수 배열 nums와 K가 주어질 때 합이 K 이하인 가장 긴 연속 부분 배열의 길이를 구하세요.", ["nums=[2,1,3,2,4,1], K=6", "3"],
        ["모든 값이 양수라 right가 늘면 합은 증가합니다.", "합이 K를 넘으면 left를 이동해 조건을 회복합니다.", "조건을 만족하는 모든 순간에 길이를 갱신합니다."],
        "def longest_under_k(nums, k):\n    left = total = best = 0\n    for right, x in enumerate(nums):\n        total += x\n        while total > k:\n            total -= nums[left]\n            left += 1\n        best = max(best, right - left + 1)\n    return best", "시간 O(n), 공간 O(1)")),
    D(2, "재귀와 분할 정복", "문제 분해", 60, "같은 형태의 더 작은 문제로 나누고 종료 조건에서 멈춥니다.",
      "재귀는 큰 문제를 같은 규칙을 가진 작은 문제로 밀어 넣는 방식입니다. 중요한 것은 함수 하나가 책임질 한 단계와 종료 조건입니다. 분할 정복은 나눈 뒤 각각 해결하고 결과를 합칩니다.",
      "입력이 줄어드는지, 가장 작은 입력에서 무엇을 반환할지, 하위 결과를 어떻게 합칠지 정합니다.",
      ["하위 문제가 동일", "트리 구조", "반으로 나누기"], ["종료 조건 누락", "과한 슬라이싱 복사", "재귀 깊이 제한"],
      [["Base", "가장 작은 입력"], ["Divide", "작은 문제로 분리"], ["Combine", "하위 결과 결합"]],
      "def solve(left, right):\n    if right - left == 1:\n        return nums[left]\n    mid = (left + right) // 2\n    return max(solve(left, mid), solve(mid, right))",
      ["재귀 함수가 반드시 가져야 하는 것은?", ["전역 변수", "종료 조건", "해시 맵"], 1, "더 작은 호출이 언젠가 멈출 수 있도록 base case가 필요합니다."],
      P("배열의 최댓값 재귀로 찾기", "기초 · 재귀", "배열 nums의 최댓값을 반복문 없이 반으로 나누어 구하세요.", ["nums=[3,7,2,9,4]", "9"],
        ["구간 길이가 1이면 그 값이 최댓값입니다.", "구간을 반으로 나누어 양쪽 최댓값을 구합니다.", "둘 중 큰 값을 반환합니다."],
        "def recursive_max(nums):\n    def solve(left, right):\n        if right - left == 1:\n            return nums[left]\n        mid = (left + right) // 2\n        return max(solve(left, mid), solve(mid, right))\n    return solve(0, len(nums))", "시간 O(n), 공간 O(log n)")),
    D(2, "백트래킹", "완전 탐색", 70, "선택을 추가하고 탐색한 뒤 되돌려 모든 후보를 만듭니다.",
      "백트래킹은 가능한 선택지를 결정 트리로 보고 깊게 내려갔다가 되돌아오는 방식입니다. 모든 경우를 보되, 이미 답이 될 수 없는 상태는 더 내려가지 않아 탐색량을 줄입니다.",
      "현재까지의 선택 path, 사용한 원소 used, 남은 조건을 명확히 분리합니다.",
      ["모든 조합·순열", "조건을 만족하는 배치", "N이 작음"], ["상태 복구 누락", "가지치기 과함"],
      [["선택", "현재 후보 추가"], ["탐색", "다음 깊이 호출"], ["복구", "선택 제거"]],
      "path.append(x)\ndfs(next)\npath.pop()",
      ["백트래킹에서 재귀 호출 뒤 선택을 제거하는 이유는?", ["다음 후보가 깨끗한 상태에서 출발하도록", "시간 복잡도를 O(1)로 만들려고", "정렬하려고"], 0, "공유 상태를 이전 단계로 복구해야 다른 선택 분기를 올바르게 탐색합니다."],
      P("합이 target인 조합", "실전 · 조합 탐색", "중복 없는 양의 정수 candidates에서 몇 개를 골라 합이 target이 되는 모든 조합을 구하세요.", ["candidates=[2,3,5,7], target=10", "[[2,3,5],[3,7]]"],
        ["start 인덱스로 순서만 다른 같은 조합을 막습니다.", "현재 합이 target이면 답에 추가합니다.", "현재 합이 target을 넘으면 더 내려가지 않습니다."],
        "def combination_sum_once(candidates, target):\n    candidates.sort()\n    answer = []\n    def dfs(start, path, total):\n        if total == target:\n            answer.append(path[:])\n            return\n        if total > target:\n            return\n        for i in range(start, len(candidates)):\n            path.append(candidates[i])\n            dfs(i + 1, path, total + candidates[i])\n            path.pop()\n    dfs(0, [], 0)\n    return answer", "최악 시간 O(2ⁿ), 공간 O(n)")),
    D(2, "트리 순회", "계층 구조", 60, "부모·자식 관계를 목적에 맞는 순서로 방문합니다.",
      "트리는 사이클이 없는 계층 구조입니다. DFS는 노드를 처리하는 시점에 따라 전위, 중위, 후위로 나뉘고 BFS는 레벨 단위로 방문합니다. 출력 순서나 계산 방향이 순회를 결정합니다.",
      "현재 노드를 언제 처리해야 하는지 묻습니다. 부모를 먼저 써야 하면 전위, 자식 결과가 필요하면 후위, BST 오름차순은 중위입니다.",
      ["부모-자식", "깊이", "레벨", "하위 결과 합산"], ["None 처리 누락", "방문 순서 착각"],
      [["Preorder", "노드 → 왼쪽 → 오른쪽"], ["Inorder", "왼쪽 → 노드 → 오른쪽"], ["Postorder", "왼쪽 → 오른쪽 → 노드"]],
      "def inorder(node):\n    if not node:\n        return\n    inorder(node.left)\n    result.append(node.value)\n    inorder(node.right)",
      ["이진 탐색 트리를 오름차순으로 방문하는 순회는?", ["전위", "중위", "레벨"], 1, "BST는 왼쪽 < 노드 < 오른쪽이므로 중위 순회가 오름차순을 만듭니다."],
      P("트리의 최대 깊이", "기초 · DFS", "이진 트리의 루트가 주어질 때 최대 깊이를 반환하세요.", ["root=[3,9,20,None,None,15,7]", "3"],
        ["빈 노드 깊이는 0입니다.", "현재 노드 깊이는 양쪽 자식 깊이 중 큰 값 + 1입니다.", "자식 결과가 필요하므로 후위 계산에 가깝습니다."],
        "def max_depth(root):\n    if not root:\n        return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))", "시간 O(n), 공간 O(h)")),
    D(2, "힙과 우선순위 큐", "우선순위", 65, "전체를 정렬하지 않고 현재 최소 또는 최대 후보를 빠르게 꺼냅니다.",
      "힙은 모든 원소를 완전히 정렬하지 않아도 가장 작은 값을 빠르게 꺼낼 수 있는 구조입니다. 계속 후보가 들어오고 그중 최선의 후보를 반복해서 선택해야 할 때 정렬보다 유리합니다.",
      "현재 가장 작은 값, 가장 큰 k개, 마감이 빠른 작업, 다익스트라의 다음 정점처럼 우선순위가 있는 대기열을 찾습니다.",
      ["상위 k개", "가장 작은 후보 반복", "작업 스케줄링"], ["Python heapq는 최소 힙", "오래된 후보 처리 누락"],
      [["push", "삽입 O(log n)"], ["peek", "확인 O(1)"], ["pop", "제거 O(log n)"]],
      "import heapq\nheapq.heappush(heap, score)\nsmallest = heapq.heappop(heap)",
      ["계속 들어오는 값 중 가장 큰 k개만 유지할 때 알맞은 구조는?", ["크기 k의 최소 힙", "연결 리스트", "스택"], 0, "상위 k개 중 가장 작은 값을 루트에서 제거하면 k개만 효율적으로 유지할 수 있습니다."],
      P("K번째로 큰 점수", "실전 · 힙", "점수 배열 scores와 k가 주어질 때 k번째로 큰 점수를 반환하세요.", ["scores=[70,90,80,100,60], k=3", "80"],
        ["크기 k의 최소 힙을 유지합니다.", "힙 크기가 k를 넘으면 가장 작은 값을 제거합니다.", "마지막에 힙 루트가 k번째로 큰 값입니다."],
        "import heapq\n\ndef kth_largest(scores, k):\n    heap = []\n    for score in scores:\n        heapq.heappush(heap, score)\n        if len(heap) > k:\n            heapq.heappop(heap)\n    return heap[0]", "시간 O(n log k), 공간 O(k)")),
    D(2, "그래프 표현과 DFS/BFS", "그래프", 75, "정점과 간선을 모델링하고 방문 상태를 관리합니다.",
      "그래프 문제의 절반은 무엇이 정점이고 무엇이 간선인가를 정하는 일입니다. 친구 관계, 지도 이동, 단어 변환, 네트워크 연결처럼 관계가 있으면 그래프가 될 수 있습니다. DFS는 연결 영역을 깊게 파고, BFS는 시작점에서 가까운 순서대로 퍼집니다.",
      "무가중치 최단 거리면 BFS, 연결 요소 개수나 모든 경로 탐색이면 DFS/BFS 둘 다 후보입니다.",
      ["연결 여부", "최소 이동 횟수", "격자 상하좌우"], ["방문 처리 지연으로 중복 삽입", "경계 조건 실수"],
      [["모델링", "정점과 간선"], ["방문", "중복 탐색 차단"], ["탐색", "DFS 깊이 / BFS 거리"]],
      "from collections import deque\nq = deque([(start, 0)])\nvisited = {start}",
      ["가중치가 없는 그래프의 최소 간선 수 경로는 보통 무엇으로 찾는가?", ["BFS", "후위 순회", "버블 정렬"], 0, "BFS는 시작점에서 거리 0, 1, 2 순으로 탐색하므로 최초 도달이 최단 거리입니다."],
      P("섬의 개수", "실전 · 격자 BFS", "0과 1로 이루어진 grid에서 상하좌우로 연결된 1의 묶음 개수를 구하세요.", ["grid=[[1,1,0],[0,1,0],[1,0,1]]", "3"],
        ["방문하지 않은 1을 만나면 새 섬입니다.", "그 지점에서 BFS로 연결된 모든 1을 방문 처리합니다.", "방문 처리를 해야 같은 섬을 다시 세지 않습니다."],
        "from collections import deque\n\ndef count_islands(grid):\n    rows, cols = len(grid), len(grid[0])\n    visited = [[False] * cols for _ in range(rows)]\n    dirs = [(1,0),(-1,0),(0,1),(0,-1)]\n    answer = 0\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] != 1 or visited[r][c]:\n                continue\n            answer += 1\n            q = deque([(r, c)])\n            visited[r][c] = True\n            while q:\n                x, y = q.popleft()\n                for dx, dy in dirs:\n                    nx, ny = x + dx, y + dy\n                    if 0 <= nx < rows and 0 <= ny < cols and grid[nx][ny] == 1 and not visited[nx][ny]:\n                        visited[nx][ny] = True\n                        q.append((nx, ny))\n    return answer", "시간 O(RC), 공간 O(RC)")),
    D(2, "유니온 파인드", "집합", 60, "원소가 같은 연결 집합에 속하는지 빠르게 합치고 확인합니다.",
      "유니온 파인드는 연결성 질문이 많이 들어오는 문제에서 빛납니다. 매번 DFS로 연결 여부를 확인하면 느리지만, 대표 부모를 유지하면 두 원소가 같은 그룹인지 빠르게 알 수 있습니다.",
      "간선이 추가되는 상황에서 연결 여부를 묻거나, 사이클을 판정하거나, 그룹 개수를 세는 문제에 씁니다.",
      ["그룹 합치기", "같은 네트워크", "사이클 여부"], ["경로 압축 누락", "1번 시작 입력 매핑 실수"],
      [["find", "대표 루트 찾기"], ["union", "두 루트 합치기"], ["compare", "대표 비교"]],
      "def find(x):\n    if parent[x] != x:\n        parent[x] = find(parent[x])\n    return parent[x]",
      ["유니온 파인드가 직접 해결하기 좋은 질문은?", ["두 정점이 같은 집합인가", "문자열의 최장 부분 문자열", "배열의 중앙값"], 0, "두 원소의 대표 루트를 비교하면 연결 집합이 같은지 알 수 있습니다."],
      P("네트워크 그룹 수", "실전 · 서로소 집합", "n명의 사람과 친구 관계 edges가 주어집니다. 친구 관계로 연결된 그룹의 개수를 구하세요.", ["n=5, edges=[(0,1),(1,2),(3,4)]", "2"],
        ["처음에는 각 사람이 자기 자신만의 그룹입니다.", "친구 관계마다 두 그룹을 union합니다.", "마지막에 대표 루트의 종류 수를 셉니다."],
        "def group_count(n, edges):\n    parent = list(range(n))\n    def find(x):\n        if parent[x] != x:\n            parent[x] = find(parent[x])\n        return parent[x]\n    def union(a, b):\n        ra, rb = find(a), find(b)\n        if ra != rb:\n            parent[rb] = ra\n    for a, b in edges:\n        union(a, b)\n    return len({find(i) for i in range(n)})", "거의 O(n+e), 공간 O(n)")),
    D(2, "DP의 상태와 점화식", "동적 계획법", 75, "겹치는 작은 문제의 답을 저장해 반복 계산을 줄입니다.",
      "DP는 이전 답을 재사용할 수 있는가가 핵심입니다. 가장 먼저 할 일은 dp[i]가 무엇을 의미하는지 한 문장으로 쓰는 것입니다. 상태 정의가 흔들리면 점화식과 초기값이 모두 흔들립니다.",
      "선택지가 반복되고, 같은 하위 문제가 여러 번 등장하며, 현재 답이 이전 답 몇 개로 표현되면 DP를 검토합니다.",
      ["경우의 수", "최댓값·최솟값 누적", "중복 부분 문제"], ["상태 의미 없이 코드 작성", "초기값과 답 위치 혼동"],
      [["상태", "dp[i]의 뜻"], ["전이", "이전 답과 관계"], ["초기값", "가장 작은 문제"]],
      "dp = [0] * (n + 1)\ndp[0] = 1\nfor i in range(1, n + 1):\n    dp[i] += dp[i - 1]\n    if i >= 2:\n        dp[i] += dp[i - 2]",
      ["DP 풀이에서 가장 먼저 명확히 해야 하는 것은?", ["변수 이름 길이", "상태의 의미", "정렬 방향"], 1, "dp[i]가 무엇을 뜻하는지 정해야 점화식과 답의 위치를 정확히 만들 수 있습니다."],
      P("계단 오르기 경우의 수", "기초 · DP", "한 번에 1칸 또는 2칸 오를 수 있습니다. n번째 계단에 도달하는 방법 수를 구하세요.", ["n=5", "8"],
        ["dp[i]를 i번째 계단에 도달하는 방법 수로 정의합니다.", "마지막 이동이 1칸이면 dp[i-1], 2칸이면 dp[i-2]에서 옵니다.", "dp[0]=1로 두면 전이가 깔끔해집니다."],
        "def climb(n):\n    dp = [0] * (n + 1)\n    dp[0] = 1\n    for i in range(1, n + 1):\n        dp[i] += dp[i - 1]\n        if i >= 2:\n            dp[i] += dp[i - 2]\n    return dp[n]", "시간 O(n), 공간 O(n)")),
    D(3, "그리디", "선택 전략", 65, "현재의 최선 선택이 전체 최선으로 이어지는 근거를 확인합니다.",
      "그리디는 가장 쉬워 보이지만 가장 위험한 패턴입니다. 매 순간 좋은 선택이 전체 최적해로 이어진다는 근거가 필요합니다. 보통 이 선택을 해도 최적해를 해치지 않는다는 교환 논증으로 설명합니다.",
      "정렬 후 앞에서부터 하나씩 선택하는 문제가 나오면 현재 선택 기준이 안전한지 반례를 만들어 봅니다.",
      ["최소 개수", "최대 활동 수", "가장 빠른 종료"], ["직관만 믿음", "동률 기준 누락"],
      [["후보", "현재 선택 기준"], ["안전성", "최적해를 해치지 않음"], ["반복", "남은 문제도 같은 구조"]],
      "meetings.sort(key=lambda x: x[1])\nend = count = 0\nfor start, finish in meetings:\n    if start >= end:\n        count += 1\n        end = finish",
      ["회의실 배정에서 가장 많은 회의를 고르는 대표 기준은?", ["가장 빨리 끝나는 회의", "가장 늦게 시작하는 회의", "가장 긴 회의"], 0, "빨리 끝나는 회의를 고르면 이후 회의를 넣을 수 있는 시간이 가장 많이 남습니다."],
      P("회의 최대 선택", "실전 · 그리디", "meetings에서 겹치지 않게 참석할 수 있는 회의의 최대 개수를 구하세요.", ["meetings=[(1,4),(2,3),(3,5),(0,6),(5,7)]", "3"],
        ["빨리 끝나는 회의를 고르면 남은 시간이 가장 큽니다.", "종료 시각 기준으로 정렬합니다.", "시작이 마지막 종료 이상이면 선택합니다."],
        "def max_meetings(meetings):\n    meetings.sort(key=lambda x: (x[1], x[0]))\n    end = -float('inf')\n    count = 0\n    for start, finish in meetings:\n        if start >= end:\n            count += 1\n            end = finish\n    return count", "시간 O(n log n), 공간 O(1)")),
    D(3, "누적 합과 차분", "구간 처리", 60, "구간 질의와 구간 변경을 전처리로 빠르게 처리합니다.",
      "누적 합은 앞에서부터의 합을 저장해 구간 합을 두 값의 차로 구합니다. 차분 배열은 여러 구간에 값을 더하는 작업을 시작점과 끝점에만 표시하고 마지막에 한 번 복원합니다.",
      "구간 합 질의가 여러 번 나오면 prefix, 같은 구간 업데이트가 여러 번 나오면 difference를 생각합니다.",
      ["구간 합 쿼리", "범위 업데이트", "반복 계산 제거"], ["0-based와 1-based 혼동", "끝점 다음 위치 처리 누락"],
      [["Prefix", "앞 i개 합"], ["Query", "prefix[r]-prefix[l]"], ["Difference", "변화 경계 표시"]],
      "prefix = [0]\nfor x in nums:\n    prefix.append(prefix[-1] + x)\nsegment_sum = prefix[right] - prefix[left]",
      ["누적 합 배열로 구간 합 한 번을 구하는 시간은?", ["O(1)", "O(log n)", "O(n)"], 0, "전처리 뒤에는 두 누적값의 차만 계산합니다."],
      P("여러 구간에 포인트 더하기", "실전 · 차분", "길이 n의 0 배열에 updates=(left,right,value)가 주어집니다. 각 구간에 value를 더한 최종 배열을 구하세요.", ["n=5, updates=[(1,3,2),(2,4,3)]", "[0,2,5,5,3]"],
        ["구간마다 직접 더하면 느립니다.", "diff[left]에 +value, diff[right+1]에 -value를 기록합니다.", "마지막에 누적합을 구하면 최종 증가량이 됩니다."],
        "def apply_updates(n, updates):\n    diff = [0] * (n + 1)\n    for left, right, value in updates:\n        diff[left] += value\n        if right + 1 < n:\n            diff[right + 1] -= value\n    result, cur = [], 0\n    for i in range(n):\n        cur += diff[i]\n        result.append(cur)\n    return result", "시간 O(n+q), 공간 O(n)")),
    D(3, "최단 경로", "그래프", 75, "간선 가중치의 성질에 따라 BFS와 다익스트라를 구분합니다.",
      "최단 경로는 조건 확인이 중요합니다. 모든 간선 비용이 같으면 BFS가 가장 단순합니다. 비용이 서로 다르지만 음수가 없다면 다익스트라를 씁니다. 음수 간선이 있으면 별도 알고리즘을 검토해야 합니다.",
      "간선 비용이 있는지, 비용이 음수인지, 시작점이 하나인지 여러 개인지 확인합니다.",
      ["최소 비용", "최소 시간", "가중치"], ["가중치 그래프에 BFS 사용", "오래된 거리 후보 처리"],
      [["무가중치", "BFS"], ["비음수", "Dijkstra"], ["음수 포함", "Bellman-Ford 검토"]],
      "dist[start] = 0\nheap = [(0, start)]\nwhile heap:\n    cost, u = heapq.heappop(heap)",
      ["음수 간선이 없는 가중 그래프의 한 시작점 최단 경로는?", ["다익스트라", "중위 순회", "슬라이딩 윈도"], 0, "비음수 가중치라면 우선순위 큐를 쓰는 다익스트라가 기본 선택입니다."],
      P("배달 가능한 마을 수", "실전 · 다익스트라", "마을 n개, 도로 roads=(a,b,cost), 제한 K가 주어집니다. 1번에서 K 이하 시간으로 갈 수 있는 마을 수를 구하세요.", ["n=5, roads=[(1,2,1),(2,3,2),(1,4,2),(4,5,2)], K=3", "4"],
        ["도로 비용이 있으므로 BFS가 아니라 다익스트라를 사용합니다.", "1번에서 각 마을까지 최단 시간을 구합니다.", "최단 시간이 K 이하인 마을을 셉니다."],
        "import heapq\n\ndef reachable_towns(n, roads, k):\n    graph = [[] for _ in range(n + 1)]\n    for a, b, cost in roads:\n        graph[a].append((b, cost)); graph[b].append((a, cost))\n    dist = [float('inf')] * (n + 1)\n    dist[1] = 0\n    heap = [(0, 1)]\n    while heap:\n        cost, u = heapq.heappop(heap)\n        if cost != dist[u]:\n            continue\n        for v, w in graph[u]:\n            if cost + w < dist[v]:\n                dist[v] = cost + w\n                heapq.heappush(heap, (dist[v], v))\n    return sum(d <= k for d in dist[1:])", "시간 O((V+E) log V), 공간 O(V+E)")),
    D(3, "위상 정렬", "DAG", 65, "선후 관계가 있는 작업을 가능한 순서로 나열합니다.",
      "위상 정렬은 먼저 해야 하는 일이 있는 문제를 순서로 바꿉니다. 진입 차수는 어떤 작업 전에 끝나야 하는 선행 작업의 수입니다. 진입 차수가 0인 작업부터 처리하면 가능한 순서를 만들 수 있습니다.",
      "강의 선수과목, 빌드 순서, 작업 의존성이 보이면 방향 그래프를 만들고 사이클 여부를 확인합니다.",
      ["선수 조건", "작업 순서", "사이클이면 불가능"], ["간선 방향 반대", "처리 수로 사이클 판정 누락"],
      [["진입 차수", "선행 간선 수"], ["Queue", "0인 정점부터"], ["감소", "다음 정점 차수 감소"]],
      "q = deque(i for i in range(n) if indegree[i] == 0)",
      ["위상 정렬을 적용할 수 없는 그래프는?", ["방향 비순환 그래프", "사이클이 있는 방향 그래프", "선후 관계 그래프"], 1, "사이클 안에서는 어떤 정점도 먼저 올 수 없어 전체 순서를 만들 수 없습니다."],
      P("강의 수강 가능 여부", "실전 · 위상 정렬", "강의 수 n과 선수 관계 prerequisites=(pre,course)가 주어집니다. 모든 강의를 들을 수 있으면 True를 반환하세요.", ["n=3, prerequisites=[(0,1),(1,2)]", "True"],
        ["pre → course 방향의 간선을 만듭니다.", "진입 차수가 0인 강의부터 큐에 넣습니다.", "처리한 강의 수가 n보다 작으면 사이클이 있습니다."],
        "from collections import deque\n\ndef can_finish(n, prerequisites):\n    graph = [[] for _ in range(n)]\n    indegree = [0] * n\n    for pre, course in prerequisites:\n        graph[pre].append(course)\n        indegree[course] += 1\n    q = deque(i for i in range(n) if indegree[i] == 0)\n    done = 0\n    while q:\n        u = q.popleft(); done += 1\n        for v in graph[u]:\n            indegree[v] -= 1\n            if indegree[v] == 0:\n                q.append(v)\n    return done == n", "시간 O(V+E), 공간 O(V+E)")),
    D(3, "최소 신장 트리", "그래프", 70, "모든 정점을 최소 비용으로 연결하되 사이클은 만들지 않습니다.",
      "최소 신장 트리는 모든 정점을 연결하는 데 필요한 최소 비용의 간선 집합입니다. Kruskal은 가장 싼 간선부터 보며, 이미 연결된 정점끼리는 선택하지 않아 사이클을 막습니다.",
      "모든 지점 연결, 최소 설치 비용, 네트워크 구축 같은 문장이 나오면 MST 후보입니다.",
      ["모든 노드 연결", "최소 비용", "간선 n-1개"], ["최단 경로와 혼동", "연결 불가능 처리 누락"],
      [["정렬", "간선을 비용순"], ["판정", "같은 집합 제외"], ["합치기", "n-1개까지 선택"]],
      "for cost, a, b in sorted(edges):\n    if find(a) != find(b):\n        union(a, b)",
      ["Kruskal에서 간선을 추가하지 않는 경우는?", ["비용이 양수일 때", "두 정점이 이미 같은 집합일 때", "간선이 짧을 때"], 1, "이미 연결된 두 정점을 다시 잇으면 사이클이 생깁니다."],
      P("사무실 네트워크 설치비", "실전 · MST", "n개 사무실과 케이블 edges=(cost,a,b)가 주어집니다. 모든 사무실을 연결하는 최소 비용을 구하세요.", ["n=4, edges=[(1,0,1),(4,0,2),(2,1,2),(3,2,3)]", "6"],
        ["간선을 비용순으로 정렬합니다.", "서로 다른 집합을 연결하는 간선만 선택합니다.", "n-1개 간선을 선택하면 모든 노드가 연결됩니다."],
        "def min_network_cost(n, edges):\n    parent = list(range(n))\n    def find(x):\n        if parent[x] != x:\n            parent[x] = find(parent[x])\n        return parent[x]\n    def union(a, b):\n        ra, rb = find(a), find(b)\n        if ra == rb:\n            return False\n        parent[rb] = ra\n        return True\n    total = chosen = 0\n    for cost, a, b in sorted(edges):\n        if union(a, b):\n            total += cost; chosen += 1\n            if chosen == n - 1:\n                return total\n    return -1", "시간 O(E log E), 공간 O(V)")),
    D(3, "DP 확장: 배낭과 경로", "동적 계획법", 75, "선택 여부와 위치를 상태 축으로 잡아 최적값을 누적합니다.",
      "2차원 DP는 상태 축이 두 개 이상일 때 등장합니다. 배낭 문제는 몇 번째 물건까지 봤는가와 남은 용량이 축이 되고, 격자 경로는 행과 열이 축이 됩니다. 순회 방향은 같은 물건을 한 번만 쓸지 여러 번 쓸지에 영향을 줍니다.",
      "현재 선택이 이전 선택과 누적되어 최댓값/최솟값을 만드는 문제에서 상태 축을 찾습니다.",
      ["용량 제한", "최대 가치", "포함/미포함"], ["0/1 배낭 순회 방향 실수", "현재 물건 이전/이후 상태 혼동"],
      [["축 결정", "무엇이 변하는가"], ["선택", "포함/미포함"], ["순서", "중복 사용 제어"]],
      "for weight, value in items:\n    for c in range(capacity, weight - 1, -1):\n        dp[c] = max(dp[c], dp[c-weight] + value)",
      ["0/1 배낭에서 용량을 큰 값부터 갱신하는 이유는?", ["같은 물건의 중복 사용을 막으려고", "정렬을 생략하려고", "메모리를 늘리려고"], 0, "작은 용량부터 갱신하면 이번 물건으로 바뀐 값을 다시 사용해 같은 물건이 중복됩니다."],
      P("가방에 담을 최대 가치", "실전 · 0/1 배낭", "items=(weight,value), capacity가 주어집니다. 각 물건은 한 번만 담을 수 있을 때 최대 가치를 구하세요.", ["items=[(3,30),(4,50),(5,60)], capacity=8", "90"],
        ["dp[c]를 용량 c에서 얻을 수 있는 최대 가치로 정의합니다.", "담지 않는 경우와 담는 경우를 비교합니다.", "각 물건을 한 번만 쓰기 위해 용량을 큰 값에서 작은 값으로 갱신합니다."],
        "def knapsack(items, capacity):\n    dp = [0] * (capacity + 1)\n    for weight, value in items:\n        for c in range(capacity, weight - 1, -1):\n            dp[c] = max(dp[c], dp[c - weight] + value)\n    return dp[capacity]", "시간 O(nC), 공간 O(C)")),
    D(3, "실전 디버깅과 검증", "구현", 60, "정답 코드를 믿기 전에 작은 입력과 경계값으로 깨뜨려 봅니다.",
      "예제 통과는 출발점일 뿐입니다. 많은 오답은 알고리즘보다 경계값, 인덱스, 초기값, 자료형 실수에서 나옵니다. 손으로 추적 가능한 작은 입력을 먼저 만들어야 디버깅 시간이 줄어듭니다.",
      "빈 입력, 원소 하나, 모두 같음, 최솟값·최댓값, 답 없음, 답이 여러 개인 경우를 직접 만듭니다.",
      ["예제만 통과", "인덱스가 많음", "초기값 애매함"], ["큰 랜덤부터 돌림", "print를 지우지 않고 제출"],
      [["손 실행", "변수 변화 표"], ["경계값", "0·1·최대"], ["불변식", "반복문 내내 참인 조건"]],
      "tests = [[], [1], [2, 2, 2], [-10**9, 10**9]]",
      ["예제 외에 가장 먼저 추가할 테스트는?", ["무작위로 긴 입력만", "빈 입력과 원소 하나 같은 경계값", "변수명을 바꾼 입력"], 1, "경계값은 인덱스 오류와 초기값 실수를 가장 빠르게 드러냅니다."],
      P("lower_bound 테스트 설계", "실전 · 검증", "정렬된 배열에서 target의 첫 위치를 찾는 lower_bound 함수를 검증할 테스트 케이스를 5개 이상 설계하세요.", ["arr=[1,2,2,2,5], target=2", "1"],
        ["빈 배열과 원소 하나를 넣습니다.", "target이 없는 경우, 모든 값보다 작은/큰 경우를 넣습니다.", "중복 값이 있을 때 첫 위치를 반환하는지 확인합니다."],
        "def lower_bound(arr, target):\n    lo, hi = 0, len(arr)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if arr[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n\ncases = [([],3,0), ([3],3,0), ([1,2,4],3,2), ([1,2,2,2,5],2,1), ([5,6],1,0), ([5,6],9,2)]", "검증은 풀이의 일부입니다.")),
    D(3, "모의 풀이와 오답 루프", "최종 점검", 70, "문제 수보다 틀린 단계와 다음 행동을 기록해 재현 가능한 실력을 만듭니다.",
      "실전 감각은 많이 푸는 것만으로 생기지 않습니다. 틀린 이유를 패턴 선택 실패, 구현 실수, 시간 복잡도 초과, 문제 해석 오류로 나눠야 다음 문제에서 바뀝니다.",
      "풀이 후 해설을 닫은 상태에서 다시 구현해 봅니다. 같은 유형을 하루 뒤에 한 번 더 풀면 기억이 훨씬 오래갑니다.",
      ["시간 초과", "해설 보면 쉬움", "같은 실수 반복"], ["정답 코드만 복사", "오답 원인을 그냥 실수로 기록"],
      [["분류", "틀린 단계 기록"], ["재구현", "해설 없이 다시 작성"], ["간격 복습", "다음 날·일주일 뒤"]],
      "review = {'signal': '연속 구간 + 최대 길이', 'miss': '슬라이딩 윈도 인식 실패'}",
      ["해설을 읽은 직후 가장 좋은 복습 행동은?", ["정답 코드를 저장하고 끝낸다", "해설을 닫고 처음부터 다시 구현한다", "비슷한 문제 제목만 찾는다"], 1, "도움 없이 설계와 구현을 재현해야 실제로 익혔는지 확인할 수 있습니다."],
      P("오답 노트 템플릿 완성", "실전 · 회고", "방금 푼 문제를 신호, 틀린 지점, 다음에 볼 문장, 다시 풀 날짜로 기록하세요.", ["signal='정렬 후 인접 비교'", "next='최소 차이는 정렬 후 이웃 후보부터 확인'"],
        ["문제 제목보다 패턴 신호를 적습니다.", "틀린 코드를 고친 내용보다 틀린 판단을 적습니다.", "다음 문제에서 읽을 짧은 행동 문장으로 바꿉니다."],
        "note = {\n    'pattern_signal': '입력 n=100000, 모든 쌍 비교 불가',\n    'failed_step': '정렬 후 인접 비교를 떠올리지 못함',\n    'next_action': '최소 차이는 정렬 후 이웃 후보부터 확인',\n    'retry_on': 'D+2'\n}", "오답 루프의 목적은 다음 행동을 바꾸는 것입니다."))
  ];

  const STORE = "coding.workbook.completed.v2";
  const completed = new Set(JSON.parse(localStorage.getItem(STORE) || "[]"));
  const plan = document.getElementById("planView");
  const dayView = document.getElementById("dayView");
  const grid = document.getElementById("dayGrid");
  const tabs = document.getElementById("weekTabs");
  let activeWeek = Math.min(3, Math.floor(completed.size / 7) + 1);
  const esc = value => String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch]);
  const save = () => localStorage.setItem(STORE, JSON.stringify([...completed].sort((a, b) => a - b)));

  function updateProgress() {
    const percent = Math.round(completed.size / DAYS.length * 100);
    const ring = document.getElementById("scoreRing");
    ring.style.setProperty("--progress", `${percent * 3.6}deg`);
    ring.querySelector("strong").textContent = `${percent}%`;
    const next = DAYS.findIndex((_, i) => !completed.has(i + 1)) + 1 || DAYS.length;
    const button = document.getElementById("continueButton");
    button.href = `#/day/${next}`;
    button.textContent = completed.size ? `Day ${next} 이어서` : "Day 1 시작";
  }

  function renderPlan() {
    const names = ["복잡도·기초 패턴", "자료구조·탐색", "그래프·DP·실전"];
    tabs.innerHTML = names.map((name, i) => `<button type="button" role="tab" aria-selected="${activeWeek === i + 1}" class="${activeWeek === i + 1 ? "on" : ""}" data-week="${i + 1}">${i + 1}주차 · ${name}</button>`).join("");
    grid.innerHTML = DAYS.map((d, i) => ({d, n: i + 1})).filter(x => x.d.w === activeWeek).map(({d, n}) => `<a class="day-card ${completed.has(n) ? "done" : ""}" href="#/day/${n}"><span class="day-number">${completed.has(n) ? "✓" : n}</span><div><h3>Day ${n} · ${esc(d.t)}</h3><p>${esc(d.s)}</p></div><span>${completed.has(n) ? "완료" : d.m + "분"} →</span></a>`).join("");
    updateProgress();
  }

  function renderDay(n) {
    const d = DAYS[n - 1];
    if (!d) {
      location.hash = "#/plan";
      return;
    }
    document.getElementById("dayPosition").textContent = `Day ${n} / ${DAYS.length}`;
    document.getElementById("dayContent").innerHTML = `<article class="day-hero"><div class="day-hero-meta"><span>${esc(d.tag)}</span><span>약 ${d.m}분</span></div><h1>Day ${n} · ${esc(d.t)}</h1><p>${esc(d.s)}</p><div class="learning-map"><div><b>1. 개념 이해</b><small>왜 이 패턴이 필요한지</small></div><div><b>2. 신호 찾기</b><small>문제 문장에서 단서 찾기</small></div><div><b>3. 실전 적용</b><small>체크포인트 문제 풀이</small></div></div></article>
      <div class="lesson-layout"><div class="lesson-list">
      <section class="lesson concept-deep" id="concept"><span class="lesson-num">CORE CONCEPT</span><h2>${esc(d.t)} 제대로 이해하기</h2><p>${esc(d.intro)}</p><div class="concept-grid"><article><span>언제 쓰나</span><p>${esc(d.use)}</p></article><article><span>문제 신호</span><ul>${d.signals.map(x => `<li>${esc(x)}</li>`).join("")}</ul></article><article><span>자주 틀리는 지점</span><ul>${d.traps.map(x => `<li>${esc(x)}</li>`).join("")}</ul></article></div><div class="pattern-visual">${d.steps.map(x => `<div><b>${esc(x[0])}</b><small>${esc(x[1])}</small></div>`).join("")}</div><div class="code-block"><span>PYTHON 3</span><pre>${esc(d.code)}</pre></div><div class="coding-source"><a href="https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/lecture-notes/" target="_blank" rel="noopener">MIT 알고리즘 강의 ↗</a><a href="https://docs.python.org/3/tutorial/datastructures.html" target="_blank" rel="noopener">Python 자료구조 ↗</a></div></section>
      <section class="lesson practice-problem" id="practice"><span class="lesson-num">CODING CHECKPOINT</span><div class="problem-head"><div><h2>${esc(d.problem.title)}</h2><p>${esc(d.problem.level)}</p></div><button type="button" class="solution-toggle" aria-expanded="false">풀이 과정 보기</button></div><p class="problem-prompt">${esc(d.problem.prompt)}</p><div class="io-grid"><div><span>입력 예시</span><pre>${esc(d.problem.sample[0])}</pre></div><div><span>출력 예시</span><pre>${esc(d.problem.sample[1])}</pre></div></div><div class="solution-panel" hidden><h3>풀이 흐름</h3><ol class="process-list">${d.problem.plan.map(item => `<li>${esc(item)}</li>`).join("")}</ol><div class="code-block"><span>SOLUTION</span><pre>${esc(d.problem.code)}</pre></div><p class="complexity-note">${esc(d.problem.complexity)}</p></div></section>
      <section class="checkpoint" id="checkpoint"><header><div><span>QUICK CHECK</span><h2>핵심 판단 확인</h2></div><span>${completed.has(n) ? "✓ 완료" : "1문제"}</span></header><p class="question">${esc(d.q[0])}</p><div class="answers">${d.q[1].map((x, i) => `<button class="answer" type="button" data-answer="${i}">${String.fromCharCode(65 + i)}. ${esc(x)}</button>`).join("")}</div><p class="feedback" role="status">실전 문제를 먼저 생각해 보고, 마지막에 판단 기준을 확인하세요.</p></section>
      <nav class="day-nav">${n > 1 ? `<a href="#/day/${n - 1}">← Day ${n - 1}</a>` : "<span></span>"}${n < DAYS.length ? `<a href="#/day/${n + 1}">Day ${n + 1} →</a>` : "<a href=\"#/plan\">전체 진도 보기</a>"}</nav></div><aside class="day-aside"><span>TODAY'S CONTENTS</span><h3>학습 목차</h3><a href="#concept">1. 코어 개념</a><a href="#concept">2. 문제 신호</a><a href="#practice">3. 실전형 문제</a><a href="#practice">4. 풀이 과정</a><a href="#checkpoint">5. 빠른 확인</a></aside></div>`;

    const practice = document.getElementById("practice");
    practice.querySelector(".solution-toggle").addEventListener("click", event => {
      const button = event.currentTarget;
      const panel = practice.querySelector(".solution-panel");
      const open = panel.hidden;
      panel.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      button.textContent = open ? "풀이 접기" : "풀이 과정 보기";
    });

    const checkpoint = document.getElementById("checkpoint");
    checkpoint.addEventListener("click", event => {
      const button = event.target.closest("[data-answer]");
      if (!button || checkpoint.dataset.answered) return;
      const picked = Number(button.dataset.answer);
      const correct = d.q[2];
      checkpoint.querySelectorAll("[data-answer]").forEach(x => x.classList.remove("correct", "wrong"));
      checkpoint.querySelectorAll("[data-answer]").forEach((x, i) => {
        if (i === correct) x.classList.add("correct");
        else if (i === picked) x.classList.add("wrong");
      });
      const feedback = checkpoint.querySelector(".feedback");
      if (picked === correct) {
        checkpoint.dataset.answered = "1";
        completed.add(n);
        save();
        checkpoint.querySelector("header>span").textContent = "✓ 완료";
        feedback.innerHTML = `<b>정답입니다.</b> ${esc(d.q[3])} Day ${n} 학습이 완료됐어요.`;
      } else {
        feedback.innerHTML = `<b>아직 아니에요.</b> ${esc(d.q[3])} 근거를 확인하고 다시 선택하세요.`;
      }
    });
  }

  function route() {
    if ((location.hash || "") === "#/today") {
      const next = DAYS.findIndex((_, i) => !completed.has(i + 1)) + 1 || DAYS.length;
      location.replace(`#/day/${next}`);
      return;
    }
    const match = (location.hash || "#/plan").match(/^#\/day\/(\d+)$/);
    plan.hidden = !!match;
    dayView.hidden = !match;
    document.querySelectorAll("[data-route]").forEach(a => a.classList.toggle("on", !match && a.dataset.route === "plan"));
    if (match) renderDay(Number(match[1]));
    else renderPlan();
    scrollTo({top: 0, behavior: "instant"});
  }

  tabs.addEventListener("click", event => {
    const button = event.target.closest("[data-week]");
    if (!button) return;
    activeWeek = Number(button.dataset.week);
    renderPlan();
  });
  document.getElementById("resetProgress").addEventListener("click", () => {
    if (confirm("코딩 테스트 학습 진도를 모두 초기화할까요?")) {
      completed.clear();
      save();
      activeWeek = 1;
      renderPlan();
    }
  });
  const theme = localStorage.getItem("coding.theme");
  if (theme) document.documentElement.dataset.theme = theme;
  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("coding.theme", next);
  });
  addEventListener("hashchange", route);
  route();
})();
