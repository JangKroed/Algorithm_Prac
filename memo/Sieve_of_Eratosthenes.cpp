#include <stdio.h>

// 소수를 찾는 함수 (한가지 값)
bool isPrimeNumber(int x) {
    // 2부터 시작해서 특정수보다 1작은 숫자까지 확인
	for(int i = 2; i < x; i++) {
        // 한번이라도 약수가 나오면 false
		if(x % i == 0) return false;
	}
    // 약수가 아닌 소수라면 tru
	return true;
}

int main(void)
{
	printf("%d", isPrimeNumber(97));
	return 0;
}

// 위와 같이 알고리즘을 작성하는 경우 소수 판별 알고리즘의 시간 복잡도는 O(N)
// 모든 경우의 수를 다 돌며 약수 여부를 확인한다는 점에서 몹시 비효율적

// O(N^(1/2))로 손쉽게 계산
// ex) 
// 8의 경우 2 * 4 = 4 * 2와 같은 식으로 대칭을 이루기 때문


// 특정한 숫자의 제곱근까지만 약수의 여부를 검증
#include <stdio.h>
#include <math.h> // 제곱근을 불러옴

bool isPrimeNumber(int x) {
    // 언제까지 확인할지 제곱근함수를 이용해서 특정한 숫자의 제곱근까지 약수인지 확인
	int end = (int) sqrt(x);
	for(int i = 2; i <= end; i++) {
    // 약수인 경우 false
		if(x % i == 0) return false;
	}// 약수가 아닌 소수면 true
	return true;
}

int main(void)
{
	printf("%d", isPrimeNumber(97));
	return 0;
}

// 다만 이렇게 한 두 개의 소수를 판별하는 것이 아니라 대량의 소수를 한꺼번에 판별하고자 할 때 사용하는 것이 바로 에라토스테네스의 체
// 에라토스테네스의 체는 가장 먼저 소수를 판별할 범위만큼 배열을 할당에 그 인덱스에 해당하는 값을 넣어준다.

// 2, 3, 5, 7을 제외한 2, 3, 5, 7의 배수에 해당하는 것을 없애고 남은것이 소수.

#include <stdio.h>
// 10만개의 숫자들의 소수찾기
int number = 100000;
int a[100001];

void primeNumberSieve() {
    // number의 수만큼 
   for(int i = 2; i <= number; i++) {
    // i의 값으로 초기화
      a[i] = i;
   }
   for(int i = 2; i <= number; i++) {
    // 이미 지워진 숫자는 pass
      if(a[i] == 0) continue;
      // 아니라면 그 배수부터 출발해서 
      for(int j = i + i; j <= number; j += i) {
        // 가능한 숫자를 모두 지워준다. (2부터 시작하기 때문에 0으로 하면 지우는것과 같다.)
         a[j] = 0;
      }
   } // 다지운뒤 2부터 전체 숫자까지 
   for(int i = 2; i <= number; i++) {
    // 0이 아니면 해당값을 출력.
      if(a[i] != 0) printf("%d ", a[i]);
   }
} 

int main(void) {
   primeNumberSieve();
}