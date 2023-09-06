const rle = function (s) {
    for (var i = 0, a = 0, b = ''; i <= s.length; i++) {
        if (s.charAt(i) == s.charAt(i + 1))
            a++;
        else {
            b += s.charAt(i) + (a ? a + 1 : '');
            a = 0;
        }
    }
    return b;
}