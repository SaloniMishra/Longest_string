function findLongestString(arr) {
    if(!arr.length) {
        return "The array is empty";
    } else if(arr.length === 1) {
        return "The array contains only one string";
    } else {
        const longest = arr.pop().trim();
        let fullString = '';
        for (let i = 0; i < longest.length; i++) {
            let found = '';
            let substring = '';

            substring = longest[i] ? substring.concat(longest[i].toString()) : substring;

            if (arr.includes(substring)) {
                found = substring;
            }
            for (let j = i + 1; j < longest.length; j++) {
                substring = longest[j] ? substring.concat(longest[j].toString()) : substring;
                if (arr.includes(substring)) {
                    found = substring;
                }

            }
            fullString = fullString.concat(found);
        }

        if (fullString === longest) {
            return fullString;
        } else {
            if(arr.length) {
                return findLongestString(arr);
            } else {
                return "No such entry found";
            }
        }
    }
};

console.log(findLongestString(['rats', '', '', 'x', 'cat', 'cats', 'ratscats', 'ratxcats', ' catsxratss ']));


