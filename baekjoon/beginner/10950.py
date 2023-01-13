# 두 정수 A와 B를 입력받고 A + B를 출력하라

n = int(input())
for _ in range(n):
    a,b = map(int, input().split())
    print(a+b)