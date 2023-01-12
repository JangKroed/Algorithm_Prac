# for문
n = int(input())
answer = 1
if n > 0:
    for i in range(1,n+1):
        answer *= i
print(answer)

# 재귀 함수
def factorial(n):
    answer = 1
    if n > 0 :
        answer = n * factorial(n-1)
    return answer

n = int(input())
print(factorial(n))