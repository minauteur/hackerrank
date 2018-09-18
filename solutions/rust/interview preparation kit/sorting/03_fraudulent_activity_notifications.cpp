#include <bits/stdc++.h>
//c++14
using namespace std;

vector<string> split_string(string);

// Complete the activityNotifications function below.
void insertInOrder(vector<int>& v, int x) {
    if (x > v[v.size() - 1]) {
        v.push_back(x);
    }else {
        auto pos = lower_bound(v.begin(), v.end(), x);
        v.insert(pos, x);
    }
}

void removeFromOrdered(vector<int>& v, int x) {
    auto pos = lower_bound(v.begin(), v.end(), x);
    v.erase(pos);
}

int activityNotifications(vector<int> expenditure, int d) {
    bool even = (d % 2 == 0);
    int notifications = 0;
    vector<int> ordered;

    ordered.push_back(expenditure[0]);
    for (int i = 1; i<d; i++) {
        insertInOrder(ordered, expenditure[i]);
    }

    for (int i = d; i< expenditure.size(); i++) {

        double median;
        if (even) {
            median = (double)(ordered[d / 2 - 1] + ordered[d / 2]) / (double)2;
        }else {
            median = ordered[d / 2];
        }
        if (2 * median <= expenditure[i]) {
            notifications++;
        }

        removeFromOrdered(ordered, expenditure[i - d]);
        insertInOrder(ordered, expenditure[i]);

    }
    return notifications;
}


int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string nd_temp;
    getline(cin, nd_temp);

    vector<string> nd = split_string(nd_temp);

    int n = stoi(nd[0]);

    int d = stoi(nd[1]);

    string expenditure_temp_temp;
    getline(cin, expenditure_temp_temp);

    vector<string> expenditure_temp = split_string(expenditure_temp_temp);

    vector<int> expenditure(n);

    for (int i = 0; i < n; i++) {
        int expenditure_item = stoi(expenditure_temp[i]);

        expenditure[i] = expenditure_item;
    }

    int result = activityNotifications(expenditure, d);

    fout << result << "\n";

    fout.close();

    return 0;
}

vector<string> split_string(string input_string) {
    string::iterator new_end = unique(input_string.begin(), input_string.end(), [] (const char &x, const char &y) {
        return x == y and x == ' ';
    });

    input_string.erase(new_end, input_string.end());

    while (input_string[input_string.length() - 1] == ' ') {
        input_string.pop_back();
    }

    vector<string> splits;
    char delimiter = ' ';

    size_t i = 0;
    size_t pos = input_string.find(delimiter);

    while (pos != string::npos) {
        splits.push_back(input_string.substr(i, pos - i));

        i = pos + 1;
        pos = input_string.find(delimiter, i);
    }

    splits.push_back(input_string.substr(i, min(pos, input_string.length()) - i + 1));

    return splits;
}
