# from, import
import keyword is used to import modules into the current namespace. from…import is used to import specific attributes or functions into the current namespace. For example:

import math
will import the math module. Now we can use the cos() function inside it as math.cos(). But if we wanted to import just the cos() function, this can done using from as

from math import cos
now we can use the function simply as cos(), no need to write math.cos().

