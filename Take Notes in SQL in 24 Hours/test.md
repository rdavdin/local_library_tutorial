<!-- Copy and paste the converted output. -->

<!-----

You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 9

Conversion time: 4.525 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Sun Apr 23 2023 20:37:34 GMT-0700 (PDT)
* Source doc: Take Notes in SQL in 24 Hours
* Tables are currently converted to HTML tables.
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 9.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>
<a href="#gdcalert4">alert4</a>
<a href="#gdcalert5">alert5</a>
<a href="#gdcalert6">alert6</a>
<a href="#gdcalert7">alert7</a>
<a href="#gdcalert8">alert8</a>
<a href="#gdcalert9">alert9</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



[TOC]



## 


## Part I: An SQL concepts Overview {#part-i-an-sql-concepts-overview}


### Hour 1: Welcome to the World of SQL {#hour-1-welcome-to-the-world-of-sql}


## Part II: Building Your Database {#part-ii-building-your-database}


### Hour 2: Defining Data Structures {#hour-2-defining-data-structures}


#### Basic Data Types {#basic-data-types}

- String

- Numeric

- Date and time

Fixed-Length Strings


```
SQL standard: CHARACTER(n)
```


Varying-Length Strings


```
SQL standard: CHARACTER VARYING(n)
```


`VARBINARY`: contains a variable length of bytes and is used to store some kind of digital data such as an image file.


#### Large Object Types {#large-object-types}

`BLOB : `is a binary large object and is useful to store binary media files such as images or mp3s

`TEXT : `can be treated as a large `VARCHAR` field and is useful to store large sets of character data such as HTML input from the entries of a blog site.


#### Numeric Types {#numeric-types}


```
SQL standard: 
BIT(n)
BIT VARYING(n)
DECIMAL(p,s)
INTEGER
SMALLINT
BIGINT
FLOAT(p,s)
DOUBLE PRECISION(p,s)
REAL(s)
```


**<code><em>p</em>: p </code></strong>means Precision. It<strong><code> </code></strong>represents a number identifying the allocated or max length of the particular field for each appropriate definition

**<code><em>s</em>: s </code></strong>means Scale. It represents a number to the right of the decimal point

Decimal data type is a numeric data type used in SQL to represent fixed-point numbers. 

[Refer to this link to understand deeply about Decimal data type](https://www.sqlshack.com/understanding-sql-decimal-data-type/)

The **space **consumption of SQL Decimal data type is based on **the column definition** and not on the size of the value being assigned to it. 



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")



```
DECIMAL(4,2)
→ max value: 99.99
→ space storage for each number: 5 bytes
```



#### Floating-Point Decimals {#floating-point-decimals}

`REAL `: a data type for a column with single-precision, floating-point numbers. The precision must be between** 1 and 21 inclusive** is considered as a single-precision floating point.

`DOUBLE PRECISION` : a data type for a column with double-precision, floating-point numbers. The precision must be between** 22 and 53 inclusive** is considered as a single-precision floating point.


#### User-Defined Types {#user-defined-types}

`CREATE TYPE` statement


### Hour 3: Managing Database Objects {#hour-3-managing-database-objects}


#### Basic Statements {#basic-statements}


```
CREATE TABLE 
: can create new tables from an existing table by combining with SELECT statement
ALTER TABLE 
: Attributes of a column refer to the rules and behavior of data in a column
: Modify these attributes of a column: data type/length, precision or scale/ can contain NULL
```



#### Integrity Constraints {#integrity-constraints}


```
PRIMARY KEY
UNIQUE
: a column with UNIQUE can be NULL
FOREIGN KEY
NOT NULL
CHECK
```



### Hour 4: Normalization {#hour-4-normalization}


#### Normalization vs Denormalization {#normalization-vs-denormalization}

- Which trade-offs?


### Hour 5: Manipulating Data {#hour-5-manipulating-data}


```
INSERT
UPDATE
DELETE
```



### Hour 6: Managing Database Transactions {#hour-6-managing-database-transactions}


```
COMMIT
ROLLBACK
SAVEPOINT
```




<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")



## Part III: Getting Effective Results from Queries {#part-iii-getting-effective-results-from-queries}


### Hour 7: Introduction to Database Queries {#hour-7-introduction-to-database-queries}


```
SELECT
FROM
WHERE 
ORDER BY
```



### Hour 8: Using Operators to Categorize Data {#hour-8-using-operators-to-categorize-data}

Operators are used with the WHERE` `clause of `SELECT.`

Comparison operators:` =, &lt;> / !=, >, &lt;, >=, &lt;=` 

Logical operators: `IS NULL, BETWEEN, IN, LIKE, EXISTS, UNIQUE, ALL, SOME, ANY`

Operators used to negate conditions

Arithmetic operators


```


#### (NOT) BETWEEN min AND max
 {#not-between-min-and-max}```


- inclusive _min _and _max_


```
WHERE SEATING BETWEEN 200 AND 300
```



#### `(NOT) IN `a List {#not-in-a-list}


```
WHERE SEATING IN (200, 300, 400)
```



#### `(NOT) LIKE `similar values {#not-like-similar-values}

2 wildcard operators:

- % : zero, one, or multiple characters

- _ : a single character or number

Find any values starting with B:

`WHERE AIRCRAFTTYPE LIKE 'B%'` 

Finds any values that have DOUGLAS in any position:


```
WHERE AIRCRAFTTYPE LIKE '%DOUGLAS%'
```


Finds any values that have ir in the second and third positions:


```
WHERE AIRCRAFTTYPE LIKE '_ir%'
```


Finds any values that start with A and are at least three characters in length:


```
WHERE AIRCRAFTTYPE LIKE 'A_%_%'
```


Finds any values that end with 0:


```
WHERE AIRCRAFTTYPE LIKE '%0'
```


Finds any values that have a c in the second position and end with a 1:


```
WHERE AIRCRAFTTYPE LIKE '_c%1'
```


Finds any values in a five-digit number that start with 2 and end with 3:


```
WHERE AIRCRAFTTYPE LIKE '2___3'
```



#### (NOT) EXISTS {#not-exists}

If a subquery returns **ANY **rows at all, <code>EXISTS <strong><em>subquery</em></strong></code> is <code>TRUE</code>, and <code>NOT EXISTS <strong><em>subquery</em></strong></code> is <code>FALSE</code>.

[Detail here](https://dev.mysql.com/doc/refman/8.0/en/exists-and-not-exists-subqueries.html)


```
SELECT DISTINCT store_type FROM stores s1					[1]
  WHERE NOT EXISTS (
    SELECT * FROM cities WHERE NOT EXISTS (					[2]
      SELECT * FROM cities_stores						[3]
       WHERE cities_stores.city = cities.city
       AND cities_stores.store_type = stores.store_type));

[3]'s result is exactly the table cities_stores
[2]'s result is the answer for the question: which cities that storeith does not present in?
[1]'s result is the answer for the question: which stores do appear in all cities.



<table>
  <tr>
   <td>```

<code>Stores</code>

<table>
  <tr>
   <td><code>store_type</code>
   </td>
  </tr>
  <tr>
   <td><code>ST1</code>
   </td>
  </tr>
  <tr>
   <td><code>ST2</code>
   </td>
  </tr>
  <tr>
   <td><code>ST3</code>
   </td>
  </tr>
  <tr>
   <td><code>ST4</code>
   </td>
  </tr>
</table>


   </td>
   <td>

```
Cities


<table>
  <tr>
   <td>```

<code>city</code>
   </td>
  </tr>
  <tr>
   <td><code>CT1</code>
   </td>
  </tr>
  <tr>
   <td><code>CT2</code>
   </td>
  </tr>
  <tr>
   <td><code>CT3</code>
   </td>
  </tr>
</table>


   </td>
   <td>

```
Cities_Stores


<table>
  <tr>
   <td>```

<code>store_type</code>
   </td>
   <td><code>city</code>
   </td>
  </tr>
  <tr>
   <td><code>ST1</code>
   </td>
   <td><code>CT1</code>
   </td>
  </tr>
  <tr>
   <td><code>ST1</code>
   </td>
   <td><code>CT2</code>
   </td>
  </tr>
  <tr>
   <td><code>ST2</code>
   </td>
   <td><code>CT1</code>
   </td>
  </tr>
  <tr>
   <td><code>ST3</code>
   </td>
   <td><code>CT1</code>
   </td>
  </tr>
  <tr>
   <td><code>ST3</code>
   </td>
   <td><code>CT2</code>
   </td>
  </tr>
  <tr>
   <td><code>ST3</code>
   </td>
   <td><code>CT3</code>
   </td>
  </tr>
</table>


   </td>
  </tr>
</table>



```
[2]'s result



<table>
  <tr>
   <td>```

<code>store_type</code>
   </td>
   <td><code>city</code>
   </td>
  </tr>
  <tr>
   <td><code>ST1</code>
   </td>
   <td><code>CT3</code>
   </td>
  </tr>
  <tr>
   <td><code>ST2</code>
   </td>
   <td><code>CT2</code>
   </td>
  </tr>
  <tr>
   <td><code>ST2</code>
   </td>
   <td><code>CT3</code>
   </td>
  </tr>
  <tr>
   <td><code>ST4</code>
   </td>
   <td><code>CT1</code>
   </td>
  </tr>
  <tr>
   <td><code>ST4</code>
   </td>
   <td><code>CT2</code>
   </td>
  </tr>
  <tr>
   <td><code>ST4</code>
   </td>
   <td><code>CT3</code>
   </td>
  </tr>
</table>



```
ST1 does not exist in CT3
ST2 does not exist in CT2 and CT3
ST4 does not exist in CT1, CT2 and CT3

[1]'s result


<table>
  <tr>
   <td>```

<code>store_type</code>
   </td>
  </tr>
  <tr>
   <td><code>ST3</code>
   </td>
  </tr>
</table>



```
ST3 does not exist in the table of [2]'s result. In other words, ST3 does appear/exist in all cities CT1, CT2 and CT3


#### ALL, SOME and ANY
 {#all-some-and-any}```


The `ALL` operator is used to compare a value to all values in another value set.


```
SELECT *
FROM AIRCRAFT
WHERE SEATING > ALL ( SELECT SEATING
                FROM AIRCRAFT
            WHERE AIRCRAFTTYPE='Boeing 777' );

SOME is as an alias for ANY
```


The `ANY `operator compares a value to any applicable value in the list according to the

condition.


```
SELECT s1 FROM t1 WHERE s1 <> ANY  (SELECT s1 FROM t2);
SELECT s1 FROM t1 WHERE s1 <> SOME (SELECT s1 FROM t2);

<> SOME is an alias for <> ANY 
b: the result from SELECT s1 FROM t2
```


The meaning,` `there is some <code><em>b</em></code> to which <code><em>s1</em></code> is not equal. In other words, <code><em>TRUE</em></code> if there is at least one record from <em>b </em>that is different from <code><em>s1</em></code>.


```
<> ALL is an alias for NOT IN
```



#### Arithmetic Operators +, -, *, / {#arithmetic-operators-*}


```
SELECT TRAVELTIME + 30 AS DELAY_TIME FROM ROUTES;
SELECT * FROM ROUTES WHERE (TRAVELTIME + 30) > 1080;
```



### Hour 9: Summarizing Data Results from a Query {#hour-9-summarizing-data-results-from-a-query}

Functions are keywords in SQL used **to manipulate values within columns** for output purposes. A function is a command normally used with a column name or expression that processes the incoming data to produce a result.

The basic set of aggregate functions:


```
COUNT
SUM
MAX
MIN
AVG
```



### Hour 10: Sorting and Group Data {#hour-10-sorting-and-group-data}

Learn how to break returned data from a query into groups for improved readability **<code>using aggregate functions + GROUP BY</code></strong>

The selected columns (the column list following the `SELECT `keyword in the query) are the columns you can reference in the `GROUP BY` clause.


```
SELECT LASTNAME, FIRSTNAME
FROM EMPLOYEES
GROUP BY LASTNAME;
```


→ `Error`: The column` EMPLOYEES.FirstName` is invalid in the select list because it is not contained in either an aggregate function or the `GROUP BY` clause.


```
SELECT LASTNAME, FIRSTNAME
FROM EMPLOYEES
GROUP BY LASTNAME, FIRSTNAME;
→ NO ERROR



#### GROUP BY vs ORDER BY
 {#group-by-vs-order-by}```


- The `GROUP BY` clause is designed to group identical data, whereas the `ORDER BY `clause is designed merely to put data into a specific order. You can use `GROUP BY` and `ORDER BY` in the same `SELECT` statement, but you must follow a specific order.

- You can use the `GROUP BY` clause in the `CREATE VIEW` statement to sort data, but the `ORDER BY` clause is **not allowed** in the `CREATE VIEW` statement. 


#### CUBE and ROLLUP {#cube-and-rollup}

[Rollup in MySQL](https://dev.mysql.com/doc/refman/8.0/en/group-by-modifiers.html)

Cube is not supported in MySQL


#### The `HAVING` clause {#the-having-clause}

- The `HAVING` clause when used with the `GROUP BY` clause in a `SELECT` statement tells `GROUP BY` which groups to include in the output.  

- `HAVING` is to `GROUP BY` as `WHERE` is to `SELECT`

- `WHERE` clause places **conditions **on the selected columns, and `HAVING` clause places **conditions **on groups created by `GROUP BY` clause.


<table>
  <tr>
   <td><code>SELECT</code>
<p>
<code>FROM</code>
<p>
<code>WHERE</code>
<p>
<code>GROUP BY</code>
<p>
<code>HAVING </code>
<p>
<code>ORDER BY</code>
   </td>
   <td><code>SELECT <strong><em>COLUMN1, COLUMN2</em></strong></code>
<code>FROM <strong><em>TABLE1, TABLE2</em></strong></code>
<code>WHERE <strong><em>CONDITIONS</em></strong></code>
<code>GROUP BY <strong><em>COLUMN1, COLUMN2</em></strong></code>
<code>HAVING <strong><em>CONDITIONS</em></strong></code>
<code>ORDER BY <strong><em>COLUMN1, COLUMN2</em></strong></code>
   </td>
  </tr>
</table>


E.g: Display only the cities that have an average salary equal to` $71,000`.


```
SELECT CITY, AVG(PAYRATE) AS AVG_PAYRATE, AVG(SALARY) AS AVG_SALARY
FROM EMPLOYEES
GROUP BY CITY
HAVING AVG(SALARY)=71000
ORDER BY 1;
```



### Hour 11: Restructuring the Appearance of Data {#hour-11-restructuring-the-appearance-of-data}


#### Common Character Functions {#common-character-functions}

[In MySQL](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html)


```
CONCAT
UPPER
LOWER
SUBSTR
TRANSLATE
REPLACE
LTRIM
RTRIM
```



#### Miscellaneous Character Functions {#miscellaneous-character-functions}


```
LENGTH
ISNULL
LPAD (left pad)
RPAD (right pad)
ASCII
```


Mathematical Functions

[In MySQL ](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html)


```
ABS (Absolute value)
ROUND
SQRT
SIGN
POWER
CEIL/FLOOR
EXP
SIN, COS, TAN
```



#### Conversion Functions {#conversion-functions}

These functions are used to convert a data type into another data type.



* Character to numeric
* Numeric to character
* Character to date
* Date to character


### Hour 12: Understanding Dates and Times {#hour-12-understanding-dates-and-times}



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")




<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")


Which datetime types should be used? You should consider the range of each type. For example, whether you choose `timestamp `or `datetime `in MySQL for storing birthdate? You should know the difference between `timestamp `and `datetime `like [in detail here](https://www.tutorialspoint.com/What-is-the-difference-between-MySQL-DATETIME-and-TIMESTAMP-data-type).

[Date and Time functions in MySQL](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_datediff)


## Part IV: Building Sophisticated Database Queries {#part-iv-building-sophisticated-database-queries}


### Hour 13: Joining Tables in Queries {#hour-13-joining-tables-in-queries}



* Inner joins or Equijoins
* Non-Equijoins
* Outer joins
* Self joins
* Cartesian Product (x) or Cross joins


#### Using a Base Table {#using-a-base-table}

What should you join on? Should you have the need to **retrieve data from two tables that**

**do not have a common column** to join, you **must join on another table** that has a common

column or columns to both tables. That table becomes **the base table**. A base table joins

one or more tables that have common columns, or joins tables that do not have common

columns.


### Hour 14: Using Subqueries to Define Unknown Data {#hour-14-using-subqueries-to-define-unknown-data}


#### What is a Subquery? {#what-is-a-subquery}

- A subquery, aka a_ nested query_, is a query embedded within the `WHERE `clause or `HAVING` of another query to further restrict data returned by the query.

- A subquery returns data that is used **as a condition in the main query**.

- Subqueries are employed with the `SELECT `statement and with a data manipulation statement such as `INSERT`, `UPDATE`, and `DELETE `statements.

- use logical and relational operators, such as: `=, >, &lt;, &lt;>,!=, IN, NOT IN, AND, OR`, and so on.


#### Notes with subqueries {#notes-with-subqueries}

- Cannot us an `ORDER BY` clause in a subquery, but can use the` GROUP BY` clause to perform the same functions as the `ORDER BY` clause in a subquery

- Cannot use the `BETWEEN` operator with a subquery, but can use the `BETWEEN` operator within the subquery. Weird? Try testing with your implementation (MySQL, Oracle, etc.)



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")



#### Tip: Using Subqueries for Unknown Values {#tip-using-subqueries-for-unknown-values}


```
SELECT E.EMPLOYEEID,E.LASTNAME, A.AIRPORTNAME, E.SALARY
FROM EMPLOYEES E
	INNER JOIN AIRPORTS A
	ON E.AIRPORTID = A.AIRPORTID
WHERE E.SALARY=
		(SELECT SALARY
		 FROM EMPLOYEES
		 WHERE EMPLOYEEID=3908);
```


Subqueries are frequently used to place conditions on a query when **the exact conditions are unknown**. The salary for `3908` in the previous example was unknown, but the subquery was designed to do the footwork for you.


#### Correlated Subqueries {#correlated-subqueries}

- A **_correlated subquery_** is a subquery that is dependent upon information in the main query. This means that tables in a subquery can be related to tables in the main query.

Refer back to<code> [(NOT) EXISTS](#not-exists)</code> to see an interesting example.

- Consider that a subquery must **be evaluated prior to** the main part of the query, so the time that it takes to execute the subquery has a direct effect on the time it takes for the main query to execute. 


### Hour 15: Combining Multiple Queries into One {#hour-15-combining-multiple-queries-into-one}


#### Compound Queries {#compound-queries}



* Using `SET` **operators `(UNION, INTERSECT, EXCEPT) `**to join the two queries.
* To use the `SET` operators, each `SELECT` statement must have **the same number of columns selected**, **the same number of column expressions**, **the same data type**, and **the same order - but they do not have to be the same length**.


```
UNION/ UNION ALL

```



* Return the output of two single queries
* `ALL` for displaying duplicate rows of a result


```
INTERSECT/ INTERSECT ALL

```



* Return identical rows between two queries


```
EXCEPT/ EXCEPT ALL

```



* Combines two `SELECT` statements and returns rows **from the first <code>SELECT</code> statement that are not returned by the second</strong> <code>SELECT</code> statement. In other words, it returns the results of one query that do not exist in another query.


#### <code>ORDER BY</code> with a Compound Query {#order-by-with-a-compound-query}

- Only use ONE the` ORDER BY `clause to order the results of a compound query.


```
SELECT COLUMN1 [, COLUMN2 ]
FROM TABLE1 [, TABLE2 ]
[ WHERE ]
OPERATOR{UNION | EXCEPT | INTERSECT | UNION ALL}
SELECT COLUMN1 [, COLUMN2 ]
FROM TABLE1 [, TABLE2 ]
[ WHERE ]
[ ORDER BY ]
```



#### `GROUP BY` with a Compound Query {#group-by-with-a-compound-query}

Unlike `ORDER BY`, you can use `GROUP BY `in **each<code> SELECT </code></strong>statement of a compound query, <strong>but you also can</strong> use it following all individual queries. In addition, you can use the<code> HAVING </code>clause (sometimes used with the <code>GROUP BY</code> clause) in each <code>SELECT</code> statement of a compound statement.


```
SELECT COLUMN1 [, COLUMN2 ]
FROM TABLE1 [, TABLE2 ]
[ WHERE ]
[ GROUP BY ]
[ HAVING ]
OPERATOR {UNION | EXCEPT | INTERSECT | UNION ALL}
SELECT COLUMN1 [, COLUMN2 ]
FROM TABLE1 [, TABLE2 ]
[ WHERE ]
[ GROUP BY ]
[ HAVING ]
[ ORDER BY ]
```



## Part V: SQL Performance Tuning {#part-v-sql-performance-tuning}


### Hour 16: Using Indexes to Improve Performance {#hour-16-using-indexes-to-improve-performance}



* An index is typically stored separately from the table for which the index was created.

→ Indexes do take up physical space

→ When new data is added to the table, an extra work/overhead needs to add entries to the index

	→ modify data can negatively affect the performance of the operations



* Index typically stores information in an orderly tree-like format.


```
CREATE INDEX INDEX_NAME 
ON TABLE_NAME (COLUMN_NAME)
```



#### Types of Indexes {#types-of-indexes}

**1. Single-Column Indexes**



* Single-Column indexes are most effective when used on columns that are **frequently used alone** in the `WHERE` clause **as query conditions**.

**2. Unique Indexes**



* Only work on fields that are unique and` NOT NULL`.

**3. Composite Indexes**



* A composite index is created when indexed fields are frequently used together as conditions in the `WHERE` clause of a query.
* The order of columns in the index should be considered carefully because it can have a measurable effect on the data retrieval speed. [Refer to this stackoverflow link](https://dba.stackexchange.com/questions/160649/composite-indexes-most-selective-column-first)
* According to the book, it says that the order of the columns in the composite index is also important. The most selective column<sup>(</sup>[^1]<sup>)</sup> should be listed first, followed by the next most selective column, and so on. This can help to ensure that the index is used efficiently when searching for data.
**Tip**: In deciding whether to create a single-column index or a composite index, consider the column(s) that you might use frequently in a query’s WHERE clause as filter conditions. If only one column is used, choose a single-column index. If two or more columns are frequently used in the WHERE clause as filters, a composite index would be the best choice.


#### When Should Indexes Be Considered? {#when-should-indexes-be-considered}



1. Unique indexes are implicitly used with a primary key for the primary key to work.
2. Foreign keys are also excellent candidates for an index because you often use them to join the parent table.
3. Most, if not all, columns used for table joins should be indexed.
4. Columns that you frequently reference in the **<code>ORDER BY</code> and <code>GROUP BY</code></strong> clauses should be considered for indexes.
5. You should create indexes on columns with a <strong>high number of unique values</strong>, or columns that, when used as filter conditions in the <code>WHERE</code> clause, return <strong>a LOW percentage of rows</strong> of data from a table. This is where <strong>trial and error</strong> might come into play.
6. Last but not least, try different combinations of indexes. There is no cut-and-dried rule for using indexes. The effective use of indexes requires a thorough <strong>knowledge of</strong> <strong>table relationships</strong>, <strong>query and transaction requirements</strong>, and<strong> the data itself</strong>.


#### When Should Indexes Be Avoided? {#when-should-indexes-be-avoided}



1. Small tables
2. Columns that return **a HIGH percentage of data rows **when used as a filter condition in a query’s WHERE clause.
3. The performance of a **batch job<sup>(</sup>**[^2]<sup><strong>) </strong></sup>can be slowed considerably by the index because the index is also updated as the data is inserted, causing additional overhead. To solve this issue when running a batch job by dropping the index before the batch job and then re-creating the index after the job has completed.


4. Columns that contain a **HIGH **number of **<code>NULL </code></strong>values.
5. Columns that are frequently manipulated because the maintenance on the index can become excessive.
6. Caution should be taken when creating indexes on a table’s<strong> extremely long keys</strong> because performance is inevitably slowed by high I/O costs.


### Hour 17: Improving Database Performance {#hour-17-improving-database-performance}


#### What Is SQL Statement Tuning? {#what-is-sql-statement-tuning}



* SQL statement tuning is the process of optimally building SQL statements to achieve results in the most effective and efficient manner.
* Mainly involve tweaking a statement’s **<code>FROM</code></strong> and <strong><code>WHERE</code></strong> clauses because mostly a database server evaluates a query based on these two clauses.
* Should read the document of the optimizer to follow tips
* Should investigate built-in tools such as a tool that shows the user the execution plan of a SQL statement or a tool that measures the actual elapsed time of a SQL statement.


#### Format Your SQL Statement {#format-your-sql-statement}


##### Formatting a Statement for Readability {#formatting-a-statement-for-readability}



* Should understand how the optimizer of your implementation works to effectively tune a SQL statement
* Some basic rules for making a statement readable follow:
    * Begin a new line with each clause
    * Use aliases when multiple tables are used in the statement
    *  Etc. 



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")



##### Arranging Tables in the **<code>FROM </code></strong>Clause {#arranging-tables-in-the-from-clause}



* It might be more beneficial to list the smaller tables first and the larger tables last

    

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.png "image_tooltip")




##### Ordering Join Conditions {#ordering-join-conditions}



* The column from a base table, which is used to link tables with one or more common columns on which to join, is normally placed on the right side of a join operation in the WHERE clause
* The tables joined to the base table are normally in order from smallest to largest
* If a base table doesn’t exist, the tables should be listed from smallest to largest, with the largest tables on the right side of the join operation in the WHERE clause
* The join conditions should be in the first position(s) of the WHERE clause followed by the filter conditions



<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image8.png "image_tooltip")



##### The Most Restrictive Condition {#the-most-restrictive-condition}



* The condition that is most likely to eliminate the largest number of rows should be placed first in the WHERE clause.
* The most restrictive clauses should be evaluated before the join conditions because join conditions normally return a large number of rows


#### Other Performance Considerations {#other-performance-considerations}



* Using the LIKE operator and wildcards (%, _)
* Using IN predicate instead of the OR operator
* If possible, you should write SQL statements without using the HAVING clause
* Avoiding large _sort operations_[^3] because they are very resource-intensive and time-consuming


    * A large dataset must be stored in memory. If the dataset is too large, the system must use its disk to swap data between memory and disk. This leads to slow down the system and other queries can be also affected and timed out.
    * In addition, soring a too much data is a very expensive operation in terms of using CPU.
    * It is best to schedule queries with large sorts during off-peak database usage so that the performance of most user processes is not affected
* [Using stored procedures](#stored-procedures-and-functions) 
* Disabling indexes during batch loads
    * Can apply the strategy ‘drop and rebuild indexes’


## Part VI: Using SQL to Manage Users and Security {#part-vi-using-sql-to-manage-users-and-security}


### Hour 18: Managing Database Users {#hour-18-managing-database-users}

There are three necessities for managing users in the database. 



* First, you must create database user accounts for the proper individuals and services.
* Second, you must grant privileges to the accounts to accommodate the tasks that must be performed within the database. 
* Finally, you must either remove a user account from the database or revoke certain privileges within the database from an account.


### Hour 19: Managing Database Security {#hour-19-managing-database-security}


#### What Are Privileges? {#what-are-privileges}



* Privileges_ _are authority levels used to access the database, access objects within the database, manipulate data in the database, and perform various administrative functions within the database. In other words, _privileges _are permissions that determine what actions a user can perform on a database object.
* Privileges can be granted to _users _or _roles_


#### System Privileges vs Object Privileges {#system-privileges-vs-object-privileges}



* System privileges refer to permissions that allow a user to perform certain actions within the entire database system. These actions include **creating a database, creating a user, or backing up the database**. System privileges are granted to users by database administrators and are not specific to any particular object within the database.
* On the other hand, object privileges refer to permissions that allow a user to perform certain actions on a specific object within the database (database objects), such as a table or view. These actions include **selecting, updating, or deleting data from the object**. Object privileges are granted to users by the owner of the object or by a user with the appropriate system privileges.


#### The PUBLIC Database Account {#the-public-database-account}



* The PUBLIC database user account is a database account that represents all users in the database. 
* Caution: PUBLIC privileges can grant **unintended access**


#### Groups of Privileges {#groups-of-privileges}


#### Controlling Privileges Through Roles {#controlling-privileges-through-roles}



<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image9.png "image_tooltip")



## Part VII: Summarized Data Structures {#part-vii-summarized-data-structures}


### Hour 20: Creating and Using Views and Synonyms {#hour-20-creating-and-using-views-and-synonyms}


#### What Is a View? {#what-is-a-view}



* A view is a virtual table or** a stored query**. That is, a view looks like a table and acts like a table as far as a user is concerned, but it doesn’t require physical storage. 
* A view is considered a database object, although it is stored in memory only. It takes up no storage space as do other database objects—other than the space required to store the view definition. 
* A view **does not contain data**
* The view’s creator or the schema owner owns the view. The view owner automatically has all applicable privileges on that view and can grant privileges on the view to other users, as with tables.


#### Utilizing Views as a Form of Security {#utilizing-views-as-a-form-of-security}


#### Utilizing Views to Maintain Summarized Data {#utilizing-views-to-maintain-summarized-data}


#### Performance Impact of Nested Views {#performance-impact-of-nested-views}



* The more layers (of views) you have, the more the query engine has to work to come up with an execution plan.


#### What Is a Synonym? {#what-is-a-synonym}



* A synonym is an alternative name for an object in a database, such as a table, view, or stored procedure.


### Hour 21: Working with the System catalog {#hour-21-working-with-the-system-catalog}


#### What Is the System Catalog? {#what-is-the-system-catalog}



* The **_system catalog (aka data dictionary)_** is a collection of tables and views that contain important information about a database. 
* A system catalog is available for each database. 
* Information in the system catalog defines the structure of the database and information on the data contained therein. For example, the Data Definition Language (DDL) for all tables in the database is stored in the system catalog.
* In other words, a **_system catalog_** is a collection of **metadata **that describes the structure of a database. It contains information about the tables, columns, indexes, and other objects that make up the database. 


#### What Is Contained in the System Catalog? {#what-is-contained-in-the-system-catalog}

The system catalog contains information such as the following:



* User accounts and default settings
* Privileges and other security information
* Performance statistics
* Object sizing
* Object growth
* Table structure and storage
* Index structure and storage
* Information on other database objects, such as views, synonyms, triggers, and stored procedures
* Table constraints and referential integrity information
* User sessions
* Auditing information
* Internal database settings
* Locations of database files

The database server maintains the system catalog. For example, when a table is created, the database server inserts the data into the appropriate system catalog table or view. When a table’s structure is modified, appropriate objects in the data dictionary are updated. 


## Part VIII: Applying SQL Fundamentals in Today’s World {#part-viii-applying-sql-fundamentals-in-today’s-world}


### Hour 22: Advanced SQL Topics {#hour-22-advanced-sql-topics}


#### Cursors {#cursors}



* A cursor is a mechanism that allows you to traverse through the rows of a result set one at a time. It is similar to a pointer in programming languages.
* When you execute a query that returns multiple rows, the database server creates a result set that contains all the rows that match the query. A cursor allows you to access the rows in the result set one at a time, and perform operations on them as needed.


##### Opening a Cursor {#opening-a-cursor}

You cannot access a cursor until you have opened it. When a cursor is opened, the specified cursor’s SELECT statement is executed, and the results of the query are stored in a staging area in memory.


##### Fetching Data from a Cursor {#fetching-data-from-a-cursor}

You can retrieve the contents of the cursor (results from the query) through the FETCH statement after you open the cursor.

How to handle the cursor when fetching to the last item/row? Referring to the document of each particular implementation.


##### Closing a Cursor {#closing-a-cursor}

The result set for the cursor is contained in memory until the cursor is closed and the memory is deallocated.


#### Stored Procedures and Functions {#stored-procedures-and-functions}



* A stored procedure is a group of one or more SQL statements or functions that are stored in the database, compiled, and ready to be executed by a database user. A stored function is the same as a stored procedure, but a function returns a value.
* A stored procedure is precompiled and stored in **the database server's memory**. When a stored procedure is executed, the database server retrieves the precompiled code from memory and executes it.
* Stored procedures can **also be stored on disk, but they are typically loaded into memory** when they are executed. 


#### Triggers {#triggers}



* A trigger is a special type of stored procedure that is automatically executed in response to certain events or changes in a database. Triggers are typically used to enforce business rules, maintain data integrity, or perform complex calculations.
* Triggers can be defined to execute either before or after a specific event, such as an insert, update, or delete operation on a table. For example, you could define a trigger to automatically update a summary table whenever a new row is inserted into a related table.


#### Dynamic SQL  {#dynamic-sql}



* Dynamic SQL allows a programmer or end user to create a SQL statement’s specifics at runtime and pass the statement to the database. The database then returns data into the program variables, which are bound at SQL runtime.
* Although dynamic SQL provides more flexibility for the end user’s query needs, the performance might not compare to that of a stored procedure whose code has already been analyzed by the SQL optimizer.


#### Call-Level Interface {#call-level-interface}

A call-level interface (CLI) embeds SQL code in a host program, such as ANSI C.


### Hour 23: Extending SQL to the Enterprise, the Internet, and the Intranet {#hour-23-extending-sql-to-the-enterprise-the-internet-and-the-intranet}


### Hour 24: Extensions to Standard SQL {#hour-24-extensions-to-standard-sql}


<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:

     The most selective column is the column that has the most distinct values. When we say a column is selective, we mean that it can be used to filter out a large number of rows from a table. In this context, _restrictive _is also the same meaning _selective_.

[^2]:

     A batch job is a program or script that is designed to process a large amount of data in a single run. Batch jobs are typically run on a regular schedule, such as daily or weekly, and are used to perform tasks such as data backups, data imports, and data exports.

[^3]:

     Using the ORDER BY, GROUP BY, and HAVING clauses
