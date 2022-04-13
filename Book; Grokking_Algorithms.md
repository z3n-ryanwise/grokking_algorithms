# Grokking Algorithms

> 08/03/2022 - DD/MM/YYYY
> 
> **Author:** Aditya Y. Bhargava
> 
> **Published:** 2016
> 
> PDF Link: [Open Directory Data Archive](https://edu.anarcho-copy.org/Algorithm/grokking-algorithms-illustrated-programmers-curious.pdf)

#Book #Professional-Development #WIP/Ongoing 

---

## Summary

Designed to be an easy to follow illustrated guide to algorithms. It starts slowly, explaining core concepts as they arise. 

It does not cover every algorithm, just the fundamentals. Please reference other sources for further information alongside this book.

When reading it is recommended to run the provided code examples, and to undertake any exercises.

### Chapters

**SECTION 1: Foundations**
1. **Chapter 1:** Binary Search, Big O Notation.
2. **Chapter 2:** Arrays, Linked Lists
3. **Chapter 3:** Recursion

**SECTION 2: Algorithms**
1. Problem Solving Techniques
2. Hash Tables
3. Graph Algorithms
4. K-Nearest Neighbours (KNN)
5. Next Steps

## Questions

- Any questions that arise while reading you would like to come back to

## Interesting Mentions

- Any references in the book that might be worth following up

## Glossary
- ![[Glossary/Logarithms]]

## Notes

### References

- 

## Rough Notes

### Chapter 1

#### Introduction

- "An _Algorithm_ is a set of instructions for accomplishing a task. Every piece of code could be called an algorithm..."
- In this book you will learn the tradeoff when choosing between different algorithms.
- An understanding of basic algebra will be required. If you can solve the following, you should be ok, if not brush up first. 
	- ```f(x) = x * 2. What is the value of f(5)?```

#### Binary Search

- A binary search is an algorithm to find an item in a sorted list.
	- When given the item and the list, it will return either the items position, or nothing.
	- Imagine a list of numbers from 1 to 100, to find number 25, you could either count up and check each time `1, 2, 3, 4, 5, ...` This is referred to as a **simple search**. Or, if you know the list is sorted, you could check the middle number. If it's too high, you filtered out half the list, just check the middle of the remainder! `50, 25` Done!
	- In the worst case, this will never result in more than 7 guesses(for this range)! 
		- `100, 50, 25, 13, 7, 4, 2, 1`
- How do we work out the maximum number of guesses for a list?
	- Each step cuts the maximum number in half, so for `240,000` there are `18` steps.
	- We record this as $log_2 n$. 
	- It is solved using logarithms(See Glossary).
	- All Big O notation assumes $log_2$ and simply refers to it as  **log**

**Python Example**

```py
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

print(binary_search(mylist, 3)) # => 1
print(binary_search(mylist, -1)) # => None  
```

**Excercises**

1. What is $log_2 128$ ?
	1. `128, 64, 32, 16, 8, 4, 2, 1 == 7`
2. What is $log_2 256$ ?
	1. `256, 128, 64, 32, 16, 8, 4, 2, 1 == 8`

**Running Time**

|         | Items         | Simple Search | Binary Search          |
| ------- | ------------- | ------------- | ---------------------- |
| Guesses | 100           | 100           | 7                      |
| Guesses | 4,000,000,000 | 4,000,000,000 | 32                     |
| BigO    |               | $O(n)$ linear | $O(log n)$ logarithmic |

#### Big O Notation

- BigO notation tells you how fast the algorithm is. **It does not tell you how long it will take**
- Different algorithms with different BigO notations will grow at vastly different speeds (See Running Time above).
- Big O establishes a 'worst case runtime'
	- For example, if you're looking up a name starting with 'A' in an alphabetised list, you may find that name much faster with simple search. However simple still has a big O of $O(n)$, which is slower than binary search.
		- If you look at the worst case scenario and were to look for a name beginning with 'ZZ' binary would get there much faster, as simple search would need to check every item. This is what bigO is trying to depict.
		- Simple search will never be slower than $O(n)$ but it may be faster!

**Common Big O runtimes**

- $O(log n)$: _Log time_, e.g. Binary Search
- $O(n)$: _Linear time_, e.g. Simple Search
- $O(n * log n)$:  A fast sorting algorithm, e.g. Quicksort
- $O(n^2)$: A slow sorting algorithm, e.g. Selection Sort
- $O(n!)$: A very slow algorithm with exponentially increasing runtimes, e.g. The travelling salesman problem.

**Excercises**

What are the runtimes of the following scenarios in terms of BigO:

1. You have a name, and want to find the persons phone number in the phonebook.
	1. $O(log n)$
2. You have a phone number, and you want to find the persons name in the phone book. (Hint: You'll have to search through the whole book!)
	1. $O(n)$
3. You want to read the numbers of every person in the phone book.
	1. $O(n)$
4. You want to read the numbers of just the A's. (this is a tricky one! It involvs concepts that are covered more in chapter 4. You may be surprised!)
	1. $O(n)$ - Remember, BigO always shows _the worst case scenario_

### Chapter 2

#### Memory

- Memory can hold one thing per memory 'slot'
- Each memory slot is allocated an address, like `fe0ffeeb`
- There are two main ways to store things across multiple 'slots', **arrays**, and **linked lists**.

#### Arrays and Linked Lists

|                | Arrays | Linked Lists |
| -------------- | ------ | ------------ |
| Reading Time   | $O(1)$ | $O(n)$       |
| Insertion Time | $O(n)$ | $O(1)$       |
| Deletion Time  | $O(n)$ | $O(1)$       |

*N.B:* Insertions and deletions are only $O(1)$  if they can be instantly accessed. Often in linked list the location of the first and last item is known, so removing or appending either of these is doable.

##### Arrays:

- Arrays store each item contiguously(next to one another) in memory.
- If an array has three items, and you need to add a fourth, this may mean that the entire array needs to move if there isn't available free memory after those in use.
- Arrays are great if you need to do random reads, or jump to specific items in the list
- Can be read using either _Sequential Access_ or _Random Access_ meaning they can be read one by one, or picked out at random. 
	- This makes arrays faster for reads as they can easily be observed at any point.

##### Linked Lists

- Items can be stored anywhere in memory
- Each item also stores the location of the next item in the list
- It is difficult to reference one particular member of a linked list, instead you must follow the references one at a time until you find the one you are looking for.
- Can only be read using _Seequential Access_ meaning elements are read one by one.

**Excercises**

1. Suppose you’re building an app to keep track of your finances. Every day, you write down everything you spent money on. At the end of the month, you review your expenses and sum up how much you spent. So, you have lots of inserts and a few reads. Should you use an array or a list?
	1. Linked List: because you will be doing more writes than you will reads!

#### Inserting into the middle of a list

- Insertions can fail if there is no available memory.
- **Lists** make inserting into the middle easy, all you need to do is change the memory reference of the proceeding element
- **Arrays** however require all of the following element to move to a new memory location, and if there isn't a free memory location available at the end, the whole array will need to move to a new location.

#### Deletions

- Deletions should always be possible, as unlike insertions, you are not limited by the available memory.
- Like insertion, **lists** just require you to update the memory references to skip the deleted element

**Excercises**
1. Suppose you’re building an app for restaurants to take customer orders. Your app needs to store a list of orders. Servers keep adding orders to this list, and chefs take orders off the list and make them. It’s an order queue: servers add orders to the back of the queue, and the chef takes the first order off the queue and cooks it. Would you use an array or a linked list to implement this queue? (Hint: Linked lists are good for inserts/deletes, and arrays are good for random access. Which one are you going to be doing here?)
	1. List; there are lots of inserts, and no random access is required (first in first out)
2. Let’s run a thought experiment. Suppose Facebook keeps a list of usernames. When someone tries to log in to Facebook, a search is done for their username. If their name is in the list of usernames, they can log in. People log in to Facebook pretty often, so there are a lot of searches through this list of usernames. Suppose Facebook uses binary search to search the list. Binary search needs random access—you need to be able to get to the middle of the list of usernames instantly. Knowing this, would you implement the list as an array or a linked list? 
	1. Sorted Array; Random access will allow much faster read times, sorting it means we can do a binary search!
3. People sign up for Facebook pretty often, too. Suppose you decided to use an array to store the list of users. What are the downsides of an array for inserts? In particular, suppose you’re using binary search to search for logins. What happens when you add new users to an array? 
	1. Inserting into the array is very slow, as it would need to be resorted with each insert.
4. In reality, Facebook uses neither an array nor a linked list to store user information. Let’s consider a hybrid data structure: an array of linked lists. You have an array with 26 slots. Each slot points to a linked list. For example, the first slot in the array points to a linked list containing all the usernames starting with a. The second slot points to a linked list containing all the usernames starting with b, and so on. Suppose Adit B signs up for Facebook, and you want to add them to the list. You go to slot 1 in the array, go to the linked list for slot 1, and add Adit B at the end. Now, suppose you want to search for Zakhir H. You go to slot 26, which points to a linked list of all the Z names. Then you search through that list to find Zakhir H. Compare this hybrid data structure to arrays and linked lists. Is it slower or faster than each for searching and inserting? You don’t have to give Big O run times, just whether the new data structure would be faster or slower.
	1. Searching would be slower than it would be with a  standard array, but faster than a linked list, however inserting would be faster than it would with an array, and the same as a linked list.

#### Selection Sort 

- Selection sort requires reading through a list and constantly evaluating which item best meets the required criteria. When the read is finished, it moves that item to a new list and repeats the process until every item has been moved to the new list.
- Each search has a bigO runtime of $O(n)$ so in total this operation takes $O(n * n)$ or $O(n^2)$
	- Whilst this isn't entirely true, as each time you run it the number of $n = n - 1$ , BigO does not consider constants like this to effect runtime.
- Selection sort is useful, but very inefficient!

```py
def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index


def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr


print(selectionSort([5, 3, 6, 2, 10]))  # [2, 3, 5, 6, 10]
```

### Chapter 3

#### Recursion

