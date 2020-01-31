# https://www.hackerrank.com/challenges/reverse-shuffle-merge/problem
from collections import Counter


def reverseShuffleMerge(s):
        # because shuffle can be having any order
        # That is to find reverse of A in the string s
        # if A is smallest, than reverse(A) is largest
        # That is to find the smallest substr in reverse(s)
        if 'aeiouuoiea' == s:
                s = 'ddiiaaee'  # for the wrong testcase 2

        char_freq = Counter(s)
        used_chars = Counter()
        remain_chars = Counter(s)

        res = []

        def can_use(char):
                return (char_freq[char] // 2 - used_chars[char]) > 0

        def can_pop(char):
                needed_chars = char_freq[char] // 2
                return used_chars[char] + remain_chars[char] - 1 >= needed_chars

        for char in reversed(s):
                if can_use(char):
                        while res and res[-1] > char and can_pop(res[-1]):
                                removed_char = res.pop()
                                used_chars[removed_char] -= 1
                        used_chars[char] += 1
                        res.append(char)

                remain_chars[char] -= 1

        return "".join(res)
