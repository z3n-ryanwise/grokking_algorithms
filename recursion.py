def fact(x):
    print(x)
    if x == 1:  # Base case
        return 1
    else:  # Recursive case
        return_var = x * fact(x - 1)
        print("return var = ", return_var)
        return return_var


print(fact(5))


def sum(arr):
    total = 0
    for x in arr:
        total += x
    return total


print(sum([1, 2, 3, 4]))


def sum_recursive(arr):
    if arr == []:
        return 0  # Base case
    else:
        return arr[0] + sum_recursive(arr[1:])  # recursive case


print(sum_recursive([1, 2, 3, 4]))


def sum_tail_recursive(arr, running_total=0):
    if arr == []:
        return running_total  # Base case

    return sum_tail_recursive(arr[1:], running_total + arr[0])


print("recursive tail:", sum_tail_recursive([1, 2, 3, 4]))


def item_count(arr):
    if arr == []:
        return 0

    return 1 + item_count(arr[1:])


print(item_count([1, 2, 3, 4]))


def max_number(arr):
    if item_count(arr) == 2:
        return arr[0] if arr[0] > arr[1] else arr[1]
    max = max_number(arr[1:])
    return arr[0] if arr[0] > max else max


print(max_number([5, 7, 3, 6]))
