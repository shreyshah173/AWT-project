#include <iostream>
#include <deque>
#include <algorithm>
using namespace std;

int main() {
    deque<int> myDeque;

    // Populate the deque with some values
    myDeque.push_back(10);
    myDeque.push_back(20);
    myDeque.push_back(30);
    myDeque.push_back(20);
    myDeque.push_back(40);

    int valueToRemove = 20;

    // Remove all occurrences of the specified value from the deque
    myDeque.erase(remove(myDeque.begin(), myDeque.end(), valueToRemove), myDeque.end());

    // Display the modified deque
    cout << "Deque after removing " << valueToRemove << ": ";
    for (int value : myDeque) {
        cout << value << " ";
    }

    return 0;
}
