def binary_search(list, item):
    low = 0
    high = len(list)

    while low <= high:
        mid = (low + high) / 2
        guess = list[mid]

        if guess == item:
            return mid
        elif guess > item:
            high = mid - 1
        else:
            low = mid + 1

    return None


mylist = [1, 3, 5, 7, 9]

print(binary_search(mylist, 3))  # => 1
print(binary_search(mylist, -1))  # => None
