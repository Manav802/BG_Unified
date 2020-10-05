import React from 'react';
import WhatsNew from './whatsnew'
import Search from './search'
import Menu from './menu'
import {
    Image,
    Box,
    Button,
    Collapse,
    Icon,
    Flex,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Stack, Link, Heading, Grid, Divider, useDisclosure, Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/core'
import services from "../../database/services"
import { FaInfoCircle, FaNewspaper, FaCommentAlt, FaBriefcase } from "react-icons/fa"
import { IoIosCall } from "react-icons/io"
import newsroom from "../../database/newsroom"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Hyperlink from 'next/link';
import Router from 'next/router';
import Container from '../../pageBuilder/Container';
import CookieNotice from './CookieNotice';
import Row from '../../pageBuilder/Row';
import SVG from '../svg/SVG';

function header(props) {
    const a="data:image/jpeg;base64,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"
    const b= "data:image/jpeg;base64,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"
    const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAAB9CAMAAAARBpbGAAAAt1BMVEVKbJJGLRL//vTg0LT99ttskpVkYFtPSEE0JAdfVUd2Z0fz29mZfETaewu2trb//9z///9ukrb/3NtsbZGQkJAXGQTb29slKwIKCAQnGQOStbcfGh5NTAMuKSg5PQNBOjO/vbyRkrZgXQR2agqns7Z4cGafnJisqaX77NrWvrW6sZXk3t3i2cWekX6Bfn2Nf22Vo7Sym5FiSBXGuKTQzNG5pYL738GUeAy8u87du5Z/kbRrgZKxkV9Y5DvpAAAADnRSTlP9/vv+/v7+//7+/v7+/oP/Q6EAACo2SURBVHjarJoLe6JYEobd4yVjyJKgAo5LCDcVA0bcMKON/f9/135V50BA0WB2qp8mdtSWl7p9VdgTNRtIE1dsEGuwFKZVlvfZNhs90tez2Wy1WuHow/BjNmSbFerBmRmGsfyvGwSB49qvtu26/xmdphfWI5PHzoZ30VtPPfHyZUI8w16uGJ6MJ5OJlmo4iok0LUnTfkp4nr5eryPd0yPwrfTIX81WIBvOsgjmt6DBPhwndELX/cM0Hce2H6Zt1rvbqneKM4DrdCUeWbrXJpM6IHlP172+p3teBOfpOjtvlmWRhyf0zG+DM05OEAaB67pz07FN9206/Wf4WulenoV4uUU3UESbZTqpGfiIzku1DTjhRV/PGA6Um76k8y/ZDGMYOGHoOK5r2q5p2vb0qv3Eded0N408K/HidKVN4jjmNGV/pv3NZ59+p6WW1UcWcvZl8GSf6KIso1wszumMsUNp57p/2ubctucP/wTe9Ed0LxS3gIknn/uVNniuDL/TkH1go9BNgOch+VYISngyTTk0kYhEZzThikfHochEWJq2Y8/fpv8n3rTXeMu9dLB0P9qu4ue6DSYaElFlpWalCNMIRBsqOfQPGZt+YRRNulkYAM9xHUSlE96gk3Wwo9t6P6ATimTz19PT+2rw3MSL44qOHEn+2mxAh5DVSzq4zmjAGVtknUt0BIfMuxGZfNK3AacS7yd5V8J9/vv30+P7WtGJF1E+hRSsigwiUveIrq/gIj+jrCuMOptRPIUIS/If6IK5ad+KzE7RefZycWdYfj7+/vW+/SzpGs+VdAhNdIg+HTa1sETSGcMzOiQdnEZ0gWN+T1dGaUu69dpeKe5znfbXr9+j5VLRiTpbRaehrsBpX0GJFkh45/XSGM4eg9AOQIe6EjjzuanoTtAsp2/dN617TB4arxwOO9PJOOzv3kE3fqvT1SqnNMtiun6VfXCgF/mzkq4oyl6+ewwCOzwEJZ3sCCecF/iuEpb5Vaq0VjsNT/fSbZa7X0/L0cO4jEwhKsfFNfGSJFaaWuw7D81dqhUFVxTIQKXDQqScGx5QVWAm+Y6Q5Av59E7TH5r8T7rSMUU62u1+j0bj5ajKuy+bNCyxkH1lZLLJwAQa6ovk82cOVcwQOpN6whx4DydYJWnw8Idw8v3FPXRiPdqCbLQbvW3WFx1hcmEonXokHUdFc1Yg96IFDixcjMLfBqFjA4/7HeISHeGBnNa000/guHx1pRugccXJDjE5flguR9v0rN+dsw1iUmgJl86yamaRjr++skLSBUQXOtJztm2/nmRuDodS1rDdFZIFgRU+JXfXyNyPHh7Gb29vy93rcv8ZC61Jdw4XqwqaWKifnHx6RNol4tpJ3iPX+Tu4zXQp+Zy5axOdyXRVTa2819l/pywrhoX8EMPoDUQHPrHbjV5f38bb/cOMz/zvBl0rHIerRrpF+s/zCK6iozNAL0dkHtARAhuxiX43f232DEPl36krW0R6Vir2ws96g1sTXWXv2+Vyt9tvxzvFU6e7CMuG/qRZvv/pQXBuPBCWfOS7A2Y720ZVwZyA0CSzT0bTqgLTgfDkU+fJlOOKSO/VuvItizHh7Le7T3XWf1+lq9S1mvUxJ2lWnlKP6PeTXOkWpJ3vz9AL4LuQtAo1OyorF3RG1+pyKoqCo59LFuBA2pXuhQOtQqrnXb1cVmyiPvHS/AB1BvvUsyjyuR8URIfIpPEVYhNZZ5qu7V7QGVV9uY2HWEBcymuHplroaLSSrrvMvPTdgMeDekyKeiqL0rsJKZiNLh1H3c7HgBCGoCMRTYEJFW3bI6PNSkKSMCdWaqVY44fUJKndKDh66OVWYv2QTvua78ij5D70gKbbanhoDgmJz5TiJpKBQ5EZHkITEky6DoGJqvlgGFf4ah1QJSLlYsltMFzEYgFO9HAtFZ3oPv+05Z2EPI/J+jul5/q0hABdxELFz8h3yDsSLDatHYBnuy2h2QZYMg65r5EuIThyXQbTPaApOvFyN118QXcNTvkOeKgrFglrT7W97BGdzrVJZLrmHKMrXOdeC03DGF7gSSh6hqp/pLYb5LicLqakE3dMQOIbOnGtIHFlsXh6SPM8QWdYZIhLqiqui7YALOSdix+u8Y0RptIyBmseVU+UIPLy3CoN3bz7cC6qieca3fVdWllYLEpA6gwRdBj6Ha37aPlAQpNIb4XmhRVUHiO5w5GWq09Qvrtna/RVX9rpxM1lmppraTjKSVrvHAgxNDv0ATN0SWcCs4PvGnCFXxtDmM1KIJDO6YS4Z8MSn+3EZCO4eUXicrDljRlyDyozQD+30QcQm4Cbu26bWrkFx4WyNI/IKANkkFiJV9Gl21Xe3X2XdOLbC1IuJaycT2XBdKENp6Fq2lRTHJvs1BUtq9hyNvJaudhh0ys6bfux6r78O6frtOdVn8u76cVi8Qi2MIDL7IDWDqbJWed2o5NT4mIRYfbIKdW0RKvY2HW5ByVW0iXb2bp77lV5J8Rzh5iuBIum4nKB6x5CYR4cKpSOHZLTUD9vtYQmmxw1FhmLkprO1VRJ4aG55ru76PaD544CtaJTEcN01O8eHbSEf5m8UyE6agegM0cdorJQI1zm1eJRrTzYOPr1H/pO7Ad0vGdbOJBKmvEiGoAeA/Q7eMyhG5RM51KB6UAnESnzdKsdzuLU/rHv1vfef2C5km76Kd014dH8idIOA5BrsyCzXW4Itj3t3BH8iKOStxxyUik7nXSdXquZ39MJGtjE3XQKjr224RteLMR2B1RMvuV6wE+TNCYXzV5nuszjlONBhT9Ck0HpUdKhnB7voBO1AnkPnbrtl8jVNH0yjynZkgKSVdghQEjOKQGvz0BtrtMZjirAZKCiQ5UT6qf60eocmbyXrUbde+jYc5pV7d3V6mixxGTnBjTgHQJSmbRdMe2b3bxAF6ChoKAR0Ucr0KTr6MRUXObSbeg4d9BJB8RllbyDTmpoBYfhpNwcod8FdNfcZTVG+z4UTfNP84bvfNqOUs5GtHWKMAlo5cw8KJOOXLeI0FCpD1Z0m2V7Nxfc0c7btljfUy9pMUZwNLpW0/PiA5FJ9QSEJMPm1BFoszI+XamRmVr7FhGFt0eiUq47viS6lRzrqrOii7fL1XdTXW1dsr6j08m1Lca6rBaY/mIWEF6Ans4rIxLT/GdctFd/6RCKuyNPAgRTyROtHAvAfVSpZzUiU7+iMThtJw3F1ZlOtnGay73qmsp99GIV0rc5QpoUGM6dc8tznVNLuoHtePS8Y54fv8Y3yQfhXHa5nIcP9Ul5bUbY7D/0lpNjcRjTXqixgBGfojMc76RTvlXJn1v6bqvoIFQ462R3oN3DufMQzhFEspxvrBaTKhpotYlBr09A2n6Zi69xiGZVHgYmWrnJEzXd1ZGuWnfi8vbr92EBt9g6wSGghRgA5yTI3ICbur30zzyHC3Jspao5TNcbaKxV0O/oC2CoG4Ptx6b0jShZcN0TK4kvtxPC637Tj78DgsKySftVYCLUFk+go3UflRZAOWgP3BOadHJjEuUtWAmiFJFKqbzg2xT68YyvR9tITYvjzXa2mohGdxPPMSWr1jKXCv2ee+2ysigBzXsrtKPF0kWjoy8aoZk7JskwF5iQLGNak39NA1RK8gvXATc/MhlNU7CG54iXdOb7JtfoZinl3dk34qhN4X+J20rhem0lXUom9RN185K/pcObHXk6M5oR0PNsKM0DxLRp0vdyQPfmRxE3baNgyUZFMkmOteAsdaReonHzltEZRbr6JXz39Ljcbfe4OO8fVvPEGM7LE9HmE/1jNlt7Sfe+oFR0RGsrRRf+j3ErbU4VC6IaGbZQZGqCgoLCk02RRUWjmfL//67p0/eymPhhqDyTl4p6D6f79Gos5q6BtyV0pJZYD8Bajr2I/qDK+XclshrAu5NeLjrBvHTJViJIg10Skavn63KZWEZanaqmaU919MzSG+72K3CIETYvuTkZ3Zb/iw7g7BWXnHjvew1wJCrBxsPoHBsrG+6yGNHCRs51TI4rzkjtXjXuxOABrib4YeqEguDhCRsathMrNZtTcaLLIZjtfoQGTrd70X1FQt4KdA5TuHj7HxGdkrGoG07COO/cV0HTweW1h7m75YGC62rRggL/8Xi/r9irAEWYIOBdLh020JaM3G1Alty5hbSYFI1aEbSqaOuqpe8VQSwFiQrJ5cfLCPbRcdcjfOL4bVy0v4lmJkXciIfmXB6c1dS2tvEGorJ0IS8bTxrmxg33JRkhZVoRp8MSCpNI3CW9joh0EpegdsDW9zO/K7UCdbOiJpRFWxQC4f7w99vhn5+9hX5mMEYnEPZG+vbUkiCquYv5DylBF8dXRhAYJmXRVJVvdJQ+W7Tct1h82AReuN8vSOdYOgCBj4ynMncJPa46ZRrRNfw06kXPqrQiRKf25DgnebWFoTUX5X1BkWI0ee6TaUIXsdfxFz0cByPdPS3oYpdaprcLWxzxyO2wYNucyQ6BCE1aJGRb1AgUGcgyKUWOuHtAtNCTyFHp8EehLiLb+YVuBK7TVuKurExCB/acukN3qox096ZwZioyMAK2G2aTu5/ciR1vQSEpaR/9P3YHdN5EAw4HPIpTNVQanAMdo8kA3GGItxXdTORiOWfccDDmRDwrYVW5LO5ijCV/9RPbfTRFONwn70UDdNd9W2dFD89w4C5QFQU7pQpqO2U0kGR0meTv6GCqNAKb2eVBtD0PLN4oVp4PgrJuQ3klcTdfTjeYLqPZhzKBrgzjdXqWPX6S8K3LheEmpP9i4Tr5TVwfFwndjDARvNnJyQSH+K+RYQRJ3kJiJ6aPyocyHh0IzWR8lO3nNt/jbKwzUakgj0MSmOCkT8eAzyFhpm9zfUoF7C0QLT/0bN08EkLB3Ai2j2yXdyhNAn4QrNhKn8GR6rCsLkSNNIFMZoBHflcUAl9xMjIY5oFSNNGYV2Rn5tnvxJUAnXyfASCuPKLwe7hEF3GTe3wkDaSXmGghmuuUYt7QWglQoW+2sEyUp6tEmqWYOCZRZ3MHlDwU9QDlmTpOzGxbFIBAl+KibGXWOpVAhwcj/3uHlxEvJzzuibvB7/7YSZaI+yykemyjcMPLQsRfYUVOappWk1dkiphGbgL4X3y7EbQAw2VM9GxUEyBr1a23CCEkHX0Xdkd3jZPmH3Ypcpf+NlC8K66UqZhG0TqMS1zN/m+lL6Z2vbcN5LW9ZFImkeUcg5Iue1g9eaGT22QxEVLee5JiTRj/4GiEbu7q9FNw4ylswF33ebDnLgXuhsBG923BYwLorygKkheKsmIVomg3zO9Ie9u2LcxT6zQNBTppmoh28m9GWjIsArR1d3YSjazLi5IeJd1158+YQ7hEUpmcmlAId9HtAx53inyFVztupDOYdZkkmVAOeiWSfjLJ6C5GBXyi+zh1fmZOJGuoZTvuyCqzRm2qGdClpmqmpkGmml/klFT5PfinUn3wO/K5iL76GiRhA0yYQGKwQ4gAlZhYMt2seR1zS2UP9/imU9QKG9dDu32LfThVZGz/HiMqTDmeiG76QXaFXoADl/BDdgGk21JVTPOshcuw2rcOIkLVpEZDD6ZJtYMT7X6tNSg7Dg12r5lZlmfZXzh8FA3lFb2biG1HoOTglJkBST95GYq6bRDPxcrpdIr907nrxYEHVueuKnKa5ALx6LFJDbhDbpIxLu7wcZNocYhs0o1ysMxTY2j6WnNmQAerrBD/KOMkhKff4LqYPmgmvXKWemtNrclAo8geIOaDDeEMTmqYDWZ09b5oCJ2LTsMc4Q7Rbs5daS4SVIhJEi0kovdu4Hi5CK8T+tTnl8IeGd0iOl2v13ZWkt2RhZWToko13deyHh0lKmuDc7Pdr5UUiU1yl8lP+th56q99utZa6sBNJInyzVeJrJtzxzY3rlYjultYwaFg53nLZXBDFURqQq5IrkfcQVP25YHRvfdDOdy5Vy0Unk8C+mxRPizr0Vwp1NJhv6/EnRYSdyeBjkBljaaHplmVP3uZyigXG/mdRIdLIFRTJ2eEiTxEf5S8Mc+uwz82LJxohulLHfUPRTpSFQroultH+9nsUpYL0aV8lzsMkf36imRJUJb76+wax5Z1VbB0/rAIXa2GSx/oMomuMjWjKXa/sY1/1WXROGsk0YX1p8oIfbbTpCetu7Ks0lJxogr5s0DnTW+8ehpv50A3dwus+2NULLcI5DD18hJeLgI3LPFrVjy+b9vYvBaP4mpurXLS5k6t6UCXy0yM0DXlC95e5yr2wF2YU5hY+5oGFj0/1NS/VnZvp1xAG6n4T5RjUYWX31zvfKPQ51EE9ESiWTBt/bBR9pkvL9BxP2nXZcDK7HGzHtuAjPNqxYH1XU4oTSmaNB24cxqj3SkvbPIluozfpUMX+rnqZ45Wf35qgsQQYtMjzJrOcXLs6oOy5dzDJy7cOYUIT5QIVYk+VqclBzmVe8HcBc1I5asLVN8PCwswWwowaCKa3+0kNbQwnBrZvuVkmtAV5QeMsJ8iKPLePGViURcPmIhaotP82lnn+Tq0ay39BDgm0SBPBEQ771nMY9FnmLvLpWiLbV1sMGLpoYKkv3e7Gex1h6FPJF8BwU0cr7OzmRWfYyQG27O7seKNcZ1NCrqPWZOSZuYVivJTyaODtw4d1i9fZGLP3A3oUkdNM80Hi7m3dhzVVzUgZBLzIVzcLXRpQZWub12Rl4E6bB5VmK4Lv5NWyZtXiABRhKqPkpd7kmQn5cm+ZtaZkvHzLdbdjX4OrEf1PQk1Q03riqJ5njlV3cpsRC688Tqt8nNJcWSZfCsH7rzaqT+ddJ2HoZOt69oP67pW18JM/bXa33qSFUzN5yjv4g0JCi/BUZZGEIuv54GBnH1QHMFpysJ26poyKqMZ51Ff5ez7erOs2+NGpXFwjq3H4zrBn2EX/9HmaVo5ZJWYse/6xdIB1UvLtAfL9MNcDfNPp87IOkNVrQ1H9da57zta5vt1SDFRSwbjItPUscWuw1NQ/Mz5o1z0yGXFYWg5E19wsI+3L5ygLFp1GdKhzRE6ZXa9Pq7fj4dFPncOpmfyPAp9E/ozVa1S49raKf3cio8kfymyZGWML7Jou8//IYUy3pHt1WrtEYdZWDukoJoXAlhqh+uIXBDomGvUs1W8XfK4PMb8nMBxXk3ozvyJbkZ46AUR4w7RswI6f01HNR4jdF/tIwZd8fk81fXzOb4RQHMynU71Za35ZtuammkKdLNyvOf8zJ3CCtpHBHzIPK89X9oexQPfz9JMrX01A3dAV2eqFmn0N9pqpHgxNy+ZO4QGdxt3bZVc1r4H5Xnw26Gjm6kRuoZv+w4fKFaUt+JBVeKNwJErB8EZlzk5T0PdbzTPaFtNnwaSu3K0pP7EnSLjXtRXCASPMkiNlHftdxgp1KkegXTW62ztOZ+pQ1LzA11UiaVT1HYBFjpifOCCfhU49lDcl8rP+W+HzjSs/0i5GuZElSwalhQfLZOtSkkppdiWCgglMMCAa5X//3ftObdR0ST7dt/2mKjJRDh97nffbrmxriz7nhbzej2faTU3FtvNVKDU9c3BJLilo1VXQP2sgpCGfLKb/IHuyHjl/WFV7noHc4QMmPmTq8WTL4VLHUPznApm1E2TylneJdOga/aSEeyEOkQpe0il9FKpj3Sa3Oen97EQN0Fnua4r3P2j4OkL75d9Cz/3i56u3Ql1UEP7zYuiRVS7cVIUPiakOE0l0yy8jtt6oIZf4sz0EREhD0rhUqokceBCDUaCdJOVqx23SparpZ6iK7kPgbt5TQFJmlVYi95s0qfUfn7Y/rG7oni/obsksU7AmPkJ8uiqtq8UxF+/zhTOPSymqnv7OHvzuD8liZd+0+jIshqhLT+9bsk6fk7izEct+oHOhO+HzKCs6hFjOGIUfXzmruQKSWg69hcMqrnZQty5iRMm9B0wecXJXH8oLqUPI1gU6SiZTVkMl6vqr+AOD+DcByBu+Jy9pWXt+wWSuqZxF55V5vYLdyKqNDDvx6/ePP0hbheQ5XzEGMOdE+MzdwEkEgHKemeS8v1CugI45k+VNSo3o5ys6CikR0HHClc6WhXzdLxA7eDtfgm6y4B7nr3BS86TXHYXd02tmjyfvXI3iPpN0d0lM/spK3mAnCPTB0ganaV+BCuIVhBZ7tZLFtmZyJ437BzekL+xZnMr5M/ThgKRSj0rt4FOCbrnHY7vfXBWV3g8hdTnIvc8e8OVXUd23uYdMtksz+3ZlLvhvgnm/fgSq6Q/o5uiPBxwb3MR1iqbcodYZS3NOLIlYe+xH0eWJ6spcXOubxBh2hRZRxG9oSue9wAiiL4UFzj1/no5ym0PbxAgZ0RXNLWT5rJR/PQM7Xt0879GN2HyIMevZC96x+bMNRuqFjSZ4YgufaxMPBAClyhCBx3zixMU7zkHHS7Du20DGh6fgwzEKjfuuiKt/JQ7/G1BN7xsqvtG79KPvz/+VXJlMtyf2XJ05roCW9qlwTb5/ZuEH34/mZbio2g6gw561zVlObkhOSsEhu94udhB0B1tWyRTAiSC2xbNPHGrLeFB74bXPbrfcff/oKNHgMYhrJflLa4ogD3ZTeIcTNGJmpuK+pUpvdqdOxYPusvF1P/f/3lb42Aboz2cAuhdcC1oM2m2BV1WNCXRyfZ3++sO5OPdq0/Q3azH34FHb76X3Xd7WQTacJMTC9QLk8CbDz2k2byhBW4aWpYsE8lUKc/jmQS+x8G8P37OehqW/S7oB/vNH9Fx0VW4y+RsjVe1+3z4u+HEWvTdVpujDrb/O3eZHD7CZqpduDnvF4KOpQeu3z2mLOOLbcZ3GexKVhSQTMXay8Vswe2KvuhlvEvzNdAFCnMW2Da4M5L5Udy4E/Jmn9+wN8bQk1p0xtnkN0Foxn8LL9tLk5h0we2kGr00Te2L9MDQPJvKBd4hzy6Kjw7c9a7bI50zViVHFDiufgzSG90zzYNOB0Eh6HwDDin6Hd3p8zt4x0EyknusYq68rTzEzQick8rQeYP5F1D3a0G3PkP7GI6F0sTIHQkH8ZQZh0EHiSK0gq9h9RGr3NHZZT+igy+wYShL5EEBZ05dIJmCjiWVFNyVN3SzF8mkgZ2kRMJdM8rY3Ioiz/MixKwRUnQiNUBfKM0O0zLrds8gjOjWpt0hlAZUimeyvTsRIx14te0+iuyGThFdP5i8tSihVkUZqHPQwyPsd4ylIfYXW9A5efGCzp5NfMJgkD027R6/oPMiCwlGa8UeUUbMGaMoRE7LXKjianp2OJhl1MPtcIStWkt3rfSsmBSP2Njcvn6q6gmHKbksjM3sXV1DzcoTJdFOEh7P4Cu9Q/raX6/8WNiqth/RuXmHwTK0f+Puczh9wv4MD2TGLTxxl02402ttaYtDWW2wb/FCNllHfIQGqC+U/jbF+D9/ArrxPY9X2Ut5jEdusb7ieZuvRjj7uPEokll2SEjEstsuhcXVyICCHQvRai0eBhnQ6c1FrqKTmguwDMrK0SPMjjZil2H49hCAWyT2MUHX6jXQgTnwJg9BFy7wKysKIxFbSRgAVAvQeUC1o6OjS5DKijC3aG9W88tgAc+gQwzi6m4Y0Wm90ZuWMd3+elG7Xbtp2zUShTcX8DQC+XUL0YpX9He2bcN+ViB8+BqPTdDdJnibanBH4rwF0UWEtvJiMmfQQSuRf3jkR/i04IfCJbNyaaaSgJObJ8mc9MOl2/8Q1hGd0FVQsGwSUyOz7ANpZW1V0K4tSCZS2DeWxbXyXRYq8AcVnAoSF3kT+6fXiGWqd/dAheiELMsLAQQEAsiC6KLQs+QHSJENOk/g1V3ta6A7y+bQnRRuuStbSg/rcKmz7fZHDwO9U47r39Ddh30JyF1fBK0V7P1AeUr0DhOJeEzmtWpERlnA81Yjuh+4a57RgTtfhMTyVotFtIhB6JLEkc3liC7yZJNk0tVK0G3YGi19frQoMCtRSK8eG7MLawTX94A5AgU6Jej6CTT7YudcQ0CGELRtr0Clcg06qRLISDo4xzJZrWJLgzt7+O6ACkGXFh9PkgnqSDiEII4ALtJtCFDeHd2CigdqYGaWTl6reMnTOaSJccHGWjlgJaTPW4YbN5YCTWz8iy9IYXgbGL+PTNA5mMl+whvileAanK/wCRcFdL19bYW7GOgMc0DHlYQU6GDhb+iGV7Mi6IqPJ3TkznFlrABlFbftcsod7SHRyWUSQbcguvNeWjMFHbeHLj3WVhIw4/q6bhLW2sZhjBGtikN0ri4n4MDV+RrsgLC3g/ZSX4e+vUmmjqFmLA9Usvxagzn9HXdjAQmxyiQ92KY0HdaITq/C1QKQiI7qFq2odnxJ7ozd9LvUiZcRT1Yxa0E7BplyXoA5jNGzgA63nyes2fk0CsYuaI3I4yaZ5YS7/IIQRVk7+EFwZ1/7Y6ECQRfrmmZzGS/Dqqubvqw10Wm/g/mc5UP+Ce8+G088RSyGaGx7j58ZJrnGBfAGWClaka/W8mgz4dP5RrfaL/0Yv8F77VeN0rEFqyJnWEA0EafI6TEimYvQ046gsytCc7VUzB0fPtvp8qIDaFZsyqlN6a+qvcKeQESVVSrVI4OXOFO7NT9ipW/oSs2506rAnMyKAfPw2c1y9tzzEJgZsG7njB1YTccz4lOLopRAoNzEj7UPIYKketBeanCMEMaK3VJkLIoxC1Wa6Jj9UwvxBhFXEYQ7Fv2gdr5r0J0qkXUt1CHNxvemKIu8FgVXrKJilHVSK6Xg0yBDjAi90PM4qW8+vTlvDaKpjd5wtviA2aqrmkYmrZsaGWTJ4kZTZk3WpNBzekStK0RCjvy9X/sIDEo3FqUR+8khH+UrlcxlbYMlcpfokoA7Q3d4iCHhEZoSR8NkJuSGR3ullcNnhHOOcnAdH0++n9glSMRHKT75TgmG/SRRiXK91lLKj1iaxW/IHSY0XMZwQDAtXAHA/ca8K83OFWAz/yozT4l8gSWITBxzRijCUHkqvQ5Xbu3zv7A4nfCCvKaiTPmqcvkTDF8TnUuLstjfqpobE2LyzLSNXF2bKNVMuOGO8Bx8CEINczOJXKWZO5g8+WyoOy4YKaKta0ZidG4hbw3+t8rrj6ws/93F2fa2iURROAiJt9r5sGsECANVvINrZEDAJpal/v/fteecO7jt2ontNE7Nw7kvc+8M03i/+9puX8OP4WWZrzss83TCyW04QcfwzYNBuCxrHgM/h/BJo5kTPCLNdzNfwTKbBFHFNTVKH27A2J4/OImgVXFnhs48PiEBOO7sNZAlEhHkTHmSxgXMtAx9xZYwuGVWRLMIAp6CBOF2Q0FOy9RaDBxMSbptvvbTHlWGcNu+LV/LX8u37b7dWRnZPSQdzAZgp/nEhmwXwMBTRJSo4wvc4W51RZ6k0WcgdDXia5rsjpjZsPTR1aFtWVzYM+KqOE6ktzbJPlyH0E3fv18HNbh7fCKcfNvmaKNiU5aZfjCliK5JjQNOMCBqrA7W40w7mBWjCiBFNyIj0OAy0t2Hb9dfdOENz+GLzjXxaZ5SmiW1Ix1/kPMGQfO61VWTiA5O0DRFGkq7i23gh/pA+zAaHQJn/I4aeBmXnnRI35y/oUlaUj+d5ts49bDOaKR/wjJ7+j6kXRFaaDVBhiLi9jm/dY3NLDKUKyM40TWki36nI5/XDnTvRjdDu2niGo6u47RTXTYRR+V0Eo41GJEbW4iUg66mD9BQnsvU1C23J+REUJGzaSS/0/5G2TsrHTYw7zMbvC7R2bOymIZ6G+GA+NxIZxLGStOlYTqjS7IUljnsdDwOs8yre8dpsWxO7W6gGzwdtPvX+O7vu3akSz1dmnJunIYQZVyfxZBDNH5E0Bgd8l1TxaYdW0UXUsntVOFx1608XeZDxhEh8t10/aenPlAqorNwjsmRLv77NEUykmhcpnHsJ65qcCuCCfyO2r3oEOtEl7vrdCUdT5a0A93Xrt3OBvW2aacbJ1om6WDdUCa1v8XInJWcwgrQMGo1Og3Yf6fjnGSrIkGlK7e7635e1svhwgeGWOSC7MBAgxQUU7ooXKJ0TWNEx25dEY1dSh9E3DxkK6Prmq4s3rPftcuN7r0/wWzoR6mnY1QZ7p7OPO/9RTftdCy+ERRSv2BMId3sUh9Q7ZYJI43v/US/Yz2m7Q+4VbvoOM4uK04LX1bNNPJioZWNhMvlAUHZmnLRNqar3S7++xys5/V1u/hno9PBeDr3Tz85nvX/0X37I2ZutEwHv4t/o9u149RkN8+dzaTjVuExefldg9IKdAFbRh/a57vQiltuucX6HPo1SdDq+IL1Aw8otnnsYjxkF+pKdGKv6wcGRUnLwWxSWVtgPZ8DtQnefELwllm63l1hBBq9dFxftYU73QDdEFnCwTJCTzonOmaERg7+ooP/xbniVe3DVtM5s1mO1sKr6wL1Mz80av7gxQl5adtMIrIkVgSz+xSwRQNYHnh1Jo6Brb/EOrdl1VpPLuFQzN+q5E25CAeFfCW/I50NWE7RdQkxYh1CZLz7cqeQoHsen1DvfXrROdF1Rld3u98xoPCZIYHDtmmaG8eluAjpwxOlTZppX1f1+D54Sa/fyY81rvpqADpz0AhlCh65LWY4kxZALesOUbRBUOTruRKdToKEQ3Xi6XBURoch0ns/fWdoGdxGOmhF7fDyTrob6cLbNo+n0ejmIyzz8YCzT3HjpogMiABxWkZ40U2a4ODDVLtekx6g612crSzLtfeId7vcF7A8Mp574ABRBodSqi2S5BwkwEiqtsoJl6s6TgpxWplFwqB6aSe/L5vYa3dy3/vTv6fbsNzGO+m2T2g3fv1Bhxpr7n02B93aNccjgPqu60+ukT79PJcRXgBP15bg5urIOE/fn6PrEtv1lBf0anmAVbZqjZUyMxRQOsZCKxdyCQNdLgEsN1H9j/epiFQ7zbQrrLPDW26WWQeXjEMLrlaDezggXkfQ/VjuG1J+ON7HcAk/w2G3TGr3f7oZIbvrMPhsiMPviFC9SanrZ2p3YmXhotNzdl2lS5skW6vrZLR3bakHKcODZKeiqspcDUOzxPUsdmLkep/9yl7JLq0KSvLK6NbjI34cjwGqhJLJoWzoM+nseNXhEi7AhHa/6O6yTJ8RPB18a3zR7dcD4daxmElV/vnUioxwPLggadWE/tClroU6tQIruZUFSVqylBCI7V4qmNOdSKtCn7fXaZBplrJKK+9k0G/KSZfHozsej6rS4lQ9iLosGUQ53kgzYtIJETNvobQb2EH8QzvkoROrvagRjLoEGoyVtqwD1YMyudawHA9Tl1RcPMyVHDl7tYW6KhyqkAUopeYl7FEmao6Vs7e9/15wpemWVF5h9h2pa1nL76LD47GSjrUiBo1JqR5LrafcMDXyd1wEc/zckCjmhXRRE7vM6NTwRq7m+JJ/hAd8IRgTB6/tN6LL4+cwdXXOCTzSlVqJ4zdVVueoUAMmr+SAjJzkCuiK+EVVBjYjYwYovGTHL0tvpDyf0m4CXQC6rMdQQKW0hvxdJRFzYdodP67HlYVvnHYcXcLUVqPDALJDfVfFXILDEQlHzuzZEIeRok6bvNIqsiZ6Di6O14vRFdrirvJdOe2trJX87MqoVUhzYytUoZIYytVSjnGGWgZmmKLzKuee7rTTXed5cQseIvYp1CVgtUTMF11wRHSlJ6ASI17t6dTBEF0uffiFI2WzRmOWpousacfWwxfokIY/Cj/5Q/MsPBz14ZlXB1vRIbfEkDNQVMRZmQXIozf5HALYoqx8RELUwX/5RmsZPd0hHD+fGICPT1RQn8P8nD/nw+HwMzsAFCk7yHc6eU+RawyywihBF7zoyrzc5duzvJo1kRV+OGPzfXBdG68f7Di0Rld4NK9bbsfdVi+vY6SRdtQsDxIbe1Xyvt0rmTmMLy/OXSDtFu938zfkgTlcQPccl20M+bQA8TP7iTsG7OnarZ4OFWnJ8RW0C8pf2tXWyrARF1FUqKstEtVqau10cbRq70yIl3DGVbnO01kKUNDw4T+XaIknVeZLdricYud6Nxd4ymFzzii+6Kjd/GNcwvm2jDdgSbsbr1h78mdHOt4fyB4ravvUN4lBhxekY18FQ+lXa82YGo+E4rmK1ZOM0jncHArRjAvEWtsYNK+8dOSjGRKWgRFuZ1ecFH5614adRij7lHb8D6gYL5wtK83UBDvdZacbwvm+LCGy9/AcwxF0n0jrdgfxDA2PsFVaa0ZNQES/q49HlpYKrKwVGJqiF12kXmvkcnbu2MGbwm2Os4ybpF3OKlv9GMXg/Gyfj/a56ZNYcrDj3g3RBjI8BXojxgKJuSS7HkHwRgGoHfPd+MMsc9m1G7dxGD4HWOoGum0Z8A8/HwcUilBxRtDJcOyZ+R37nx3XK3NVr4SLxNR5JNDVsfW2Img3o+C8aD+qoq3rttZ6ACYS+qsIFOWDWn1Xm/RMGs2k6QeNk5O63h/xXVV45iSUel4rDug/cYfrAv08eVoAAAAASUVORK5CYII="
    const initRef = React.useRef();
    const [show, setShow] = React.useState(0);
    const [search, setSearch] = React.useState(false)
    Router.events.on('routeChangeComplete', () => setShow(false));
    const overlayClick = () => {
        setShow(0);
    }
    const servicesArray = Object.entries(services)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOpen2,setIsOpen2] = React.useState(false);
    const onOpen2 = () => setIsOpen2(true);
    const onClose2 = () => setIsOpen2(false);
    return (
        <>
            
            <Box className="headerBox" top="0px" bg="white" boxShadow="lg" zIndex={1000}>
                <div className="container">
                    <div className="p-3 transition-3 d-flex justify-content-between align-items-center layer-4">
                        <div className="d-flex align-items-center">
                            <Menu></Menu>
                            <Hyperlink href="/"><a>
                                <Image alt="" src="/assets/logo.png" height="40px" className="d-none d-sm-block mr-3"></Image>
                            </a></Hyperlink>

                            <Popover onClose={onClose2} onOpen={onOpen2} isOpen={isOpen2} trigger="hover" placement="bottom">
                                <PopoverTrigger>
                                    <Link display={["none", "none","none","flex"]} mx={3} fontWeight="500" mx={3} fontSize="md" color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>Solutions</Link>
                                </PopoverTrigger>
                                <PopoverContent _focus={{outline:"none"}} maxW="auto" bg="transperant" width={["100%", "100%", "720px", "960px", "1140px"]} borderWidth={0} boxShadow="none" zIndex={4} className="header-dropdown" pos="fixed" pt={6}>
                                    <Container>
                                        <Fade duration={300} distance={"5%"} top>
                                        <Box rounded={4} boxShadow="xl" bg="white">
                                            <Tabs align="center">
                                                <TabList>
                                                    <Tab p={6} _selected={{color:"blue.500", borderBottomColor:"blue.500"}}>IT & Infrastructure Services</Tab>
                                                    <Tab p={6} _selected={{color:"green.400", borderBottomColor:"green.400"}}>Network Services</Tab>
                                                    <Tab p={6} _selected={{color:"purple.500", borderBottomColor:"purple.500"}}>Cyber Security Services</Tab>
                                                    <Tab p={6} _selected={{color:"orange.400", borderBottomColor:"orange.400"}}>Collaborative Services</Tab>
                                                    <Tab p={6} _selected={{color:"primary.500", borderBottomColor:"primary.500"}}>Professional Services</Tab>
                                                </TabList>

                                                <TabPanels>
                                                    <TabPanel>
                                                        <Flex wrap="wrap" p={6}>
                                                        {servicesArray.filter(service => service[1].category === "IT Infrastructural Services").map(service => (
                                                            <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                    <Flex align="center" p={3} className="hover-effect">
                                                                        <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                        <Box as="span" ml={3}>{service[1].title}</Box>
                                                                    </Flex>
                                                                </Link>
                                                            </Hyperlink>
                                                        ))}
                                                        </Flex>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <Flex wrap="wrap" p={6}>
                                                        {servicesArray.filter(service => service[1].category === "Network Services").map(service => (
                                                            <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                    <Flex align="center" p={3} className="hover-effect">
                                                                        <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                        <Box as="span" ml={3}>{service[1].title}</Box>
                                                                    </Flex>
                                                                </Link>
                                                            </Hyperlink>
                                                        ))}
                                                        </Flex>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <Flex wrap="wrap" p={6}>
                                                        {servicesArray.filter(service => service[1].category === "Cyber Security Services").map(service => (
                                                            <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                    <Flex align="center" p={3} className="hover-effect">
                                                                        <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                        <Box as="span" ml={3}>{service[1].title}</Box>
                                                                    </Flex>
                                                                </Link>
                                                            </Hyperlink>
                                                        ))}
                                                        </Flex>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <Flex wrap="wrap" p={6}>
                                                        {servicesArray.filter(service => service[1].category === "Collaborative Services").map(service => (
                                                            <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                    <Flex align="center" p={3} className="hover-effect">
                                                                        <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                        <Box as="span" ml={3}>{service[1].title}</Box>
                                                                    </Flex>
                                                                </Link>
                                                            </Hyperlink>
                                                        ))}
                                                        </Flex>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <Flex wrap="wrap" p={6}>
                                                        {servicesArray.filter(service => service[1].category === "Professional Services").map(service => (
                                                            <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                    <Flex align="center" p={3} className="hover-effect">
                                                                        <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                        <Box as="span" ml={3}>{service[1].title}</Box>
                                                                    </Flex>
                                                                </Link>
                                                            </Hyperlink>
                                                        ))}
                                                        </Flex>
                                                    </TabPanel>
                                                </TabPanels>
                                            </Tabs>
                                        </Box>
                                        </Fade>
                                    </Container>
                                </PopoverContent>
                            </Popover>
                            <Popover onClose={onClose} onOpen={onOpen} isOpen={isOpen} trigger="hover" placement="bottom-start">
                                <PopoverTrigger>
                                    <Link display={["none", "none","none","flex"]} mx={3} fontWeight="500" mx={3} fontSize="md"  color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>Company</Link>
                                </PopoverTrigger>
                                <PopoverContent _focus={{outline:"none"}} maxW="auto" bg="transperant" width={["100%", "100%", "720px", "960px", "1140px"]} borderWidth={0} boxShadow="none" zIndex={4} className="header-dropdown" pos="fixed" pt={6} >
                                    <Container>
                                    <Fade duration={300} distance="5%" top>
                                        <Box rounded={4} boxShadow="xl" bg="white" overflow="hidden">
                                        
                                        <Row>
                                            <Box p={12} w="50%">
                                                <Grid  templateColumns="auto auto" templateRows="72px" wrap="wrap">
                                                    <Box height="48px" my={4}>
                                                    <Hyperlink href="/about">
                                                        <a className="link"><Flex align="center">
                                                            <SVG color="primary.500" src="/assets/images/icons/library/home/building.svg"></SVG>
                                                            <Box onClick={onClose} ml="3">
                                                                <Heading size="sm" fontFamily="Nexa Bold">About us</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">Our Vision & Core values</Text>
                                                            </Box>
                                                        </Flex></a>
                                                    </Hyperlink>
                                                    </Box>
                                                    <Box height="48px" my={4}>
                                                    <Hyperlink href="/newsroom">
                                                        <a className="link"><Flex align="center">
                                                            <SVG color="primary.500" src="/assets/images/icons/library/layout/layout-top-panel-5.svg"></SVG>
                                                            <Box onClick={onClose} ml="3">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Newsroom</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">What we are up to!</Text>
                                                            </Box>
                                                        </Flex></a>
                                                    </Hyperlink>
                                                    </Box>
                                                    <Box height="48px" my={4}>
                                                    <Hyperlink href="/solutions">
                                                        <a className="link"><Flex align="center">
                                                            <SVG color="primary.500" src="/assets/images/icons/library/general/folder.svg"></SVG>
                                                            <Box onClick={onClose} ml="3">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Our Solutions</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">What do we deliver</Text>
                                                            </Box>
                                                        </Flex></a>
                                                    </Hyperlink>
                                                    </Box>
                                                    <Box height="48px" my={4}>
                                                    <Hyperlink href="/about#team">
                                                        <a className="link"><Flex align="center">
                                                            <SVG color="primary.500" src="/assets/images/icons/library/communication/group.svg"></SVG>
                                                            <Box onClick={onClose} ml="3">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Team</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">Meet Us!!</Text>
                                                            </Box>
                                                        </Flex></a>
                                                    </Hyperlink>
                                                    </Box>
                                                </Grid>
                                                <Divider borderWidth={2} my={6}></Divider>
                                                <Flex wrap="wrap">
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/contact"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Contact Us</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">We are here to help!</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/newsroom?tab=Case Study"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Case Studies</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">Our Projects!!</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/stories"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Customer Stories</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">The word out there!</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                    <Box onClick={onClose} px={3} my={3} width="50%">
                                                        <Hyperlink href="/partners"><a className="link">
                                                            <Heading size="sm" fontFamily="Nexa Bold">Our Partners</Heading>
                                                            <Text fontSize="sm" fontWeight="500" opacity=".7">Companies who trust us!</Text>
                                                        </a></Hyperlink> 
                                                    </Box>
                                                </Flex>
                                                </Box>
                                                <Flex flexDirection="column" width="50%" p={12} bg="light.400">
                                                    <Heading mb={4} size="md" fontFamily="Nexa Bold">What's New</Heading>
                                                    <WhatsNew
                                                        onClick={onClose}
                                                        image={a}
                                                        heading={newsroom[0].title}
                                                        link={"/newsroom/"+newsroom[0].link}
                                                    />
                                                    <WhatsNew
                                                        onClick={onClose}
                                                        image={b}
                                                        heading={newsroom[1].title}
                                                        link={"/newsroom/"+newsroom[1].link}
                                                    />
                                                    <WhatsNew
                                                        onClick={onClose}
                                                        image={c}
                                                        heading={newsroom[2].title}
                                                        link={"/newsroom/"+newsroom[2].link}
                                                    />
                                                </Flex>
                                            </Row>
                                        </Box>
                                        </Fade>
                                    </Container>
                                </PopoverContent>
                            </Popover>
                            <Hyperlink href="/features">
                                <Link display={["none", "none","none","flex"]} mx={3} fontWeight="500" mx={3} fontSize="md"  color="primary" _hover={{color:"#ff0000", textDecoration:"none"}}>Our Features</Link>
                            </Hyperlink>
                        </div>
                        <Hyperlink href="/"><a>
                            <Image alt="" src="/assets/logo.png" height="45px" className="mr-3 d-sm-none"></Image>
                        </a></Hyperlink>
                        <div className="d-flex">
                            
                                    <Button variant="unstyled" leftIcon={IoIosCall} className="NunitoSans-Bold link p-2 mt-1 d-none d-lg-flex"> <a href="tel:1300002487" className="link">1300 00 BGUS</a> </Button>
                                
                            {/* <Search toggle ={() => setSearch(!search)} searching={search}></Search> */}
                            {/*propper syntax to use link with dynamic routing*/}
                            <Hyperlink href={`/search?search=`}>
                                <Button p={2} rounded={4} bg="white" onClick={props.toggle}>
                                    <Icon name="search" size="18px"></Icon>
                                </Button>
                            </Hyperlink>
                            <Hyperlink href="/contact">
                                <Button className="mx-3 d-none d-sm-block primary-btn"  variant="solid" variantColor="primary">Contact Us</Button>
                            </Hyperlink>
                        </div>
                    </div>
                </div>

                <CookieNotice></CookieNotice>
            </Box>
            
            {show ? <div className="overlay" onClick={overlayClick} /> : ""}
        </>
    )
}

export default header;
