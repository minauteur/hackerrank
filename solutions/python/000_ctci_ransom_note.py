# https://www.hackerrank.com/challenges/ctci-ransom-note/
from collections import Counter
# Complete the checkMagazine function below.


def checkMagazine(magazine, ransom):
    return (Counter(ransom) - Counter(magazine)) == {}


if __name__ == '__main__':
    mn = input().split()

    m = int(mn[0])

    n = int(mn[1])

    magazine = input().rstrip().split()

    note = input().rstrip().split()

    if checkMagazine(magazine, note):
        print("Yes")
    else:
        print("No")
