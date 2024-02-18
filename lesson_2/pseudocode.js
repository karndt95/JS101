/*
  START

  GET number1
  GET number2

  SET output = number1 + number2

  PRINT output

  END
*/

/*
  START

  # Given an array of Strings called "strings"

  SET iterator = 1
  SET concatenatedStrings = ""

  WHILE iterator <= length of strings
    SET concatenatedStrings += value within strings collection at space "iterator"

    iterator = iterator + 1

  PRINT concatenatedStrings

  END
*/

/*
  START

  # Given a collection of integers called "numbers"

  SET newArray = []
  SET iterator = 0

  WHILE iterator < length of numbers
    IF iterator % 2 === 0
      newArray PUSH numbers at space iterator

    iterator = iterator + 1
  
  PRINT newArray

  END
*/

/*
  START

  # Given a collection of Strings called "characters"

  SET iterator = 0
  SET iterator2 = 1
  SET count = 0

  WHILE iterator < length of characters
    SET currentCharacter = characters at space iterator
    count = count + 1

    WHILE iterator2 < length of characters
      IF currentCharacter = characters at space iterator2
        count = count + 1
        IF count === 3
          PRINT iterator2
      iterator2 = iterator2 + 1
    
    iterator = iterator + 1
    count = 0
  
  PRINT null

  END
*/

/*
  START

  # Given two collection of integers called "nums1" and "nums2"

  SET iterator = 0
  SET newArray = []

  WHILE iterator < length of nums1
    newArray PUSH nums1 at space iterator
    newArray PUSH nums2 at space iterator
    iterator = iterator + 1

  PRINT newArray

  END
*/