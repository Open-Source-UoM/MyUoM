/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

import { DEPARTMENTS } from "./DepNames";

export const schedulesData = new Map([
  [
    // Τμήμα Βαλκανικών, Σλαβικών & Ανατολικών Σπουδών
    DEPARTMENTS[0],
    {
      semester:
        "https://www.uom.gr/bso/orologio-programma",
      exam: "https://www.uom.gr/bso/programma-eksetaseon",
    },
  ],
  [

    // Τμήμα Διεθνών & Ευρωπαϊκών Σπουδών
    DEPARTMENTS[1],
    {
      semester:
        "https://www.uom.gr/ies/orologio-programma",
      exam: " https://www.uom.gr/ies/programma-eksetaseon",
    },
  ],
  [
    // Τμήμα Εκπαιδευτικής & Κοινωνικής Πολιτικής
    DEPARTMENTS[2],
    {
      semester:
        "https://www.uom.gr/esp/orologio-programma-didaskalias",
      exam: " https://www.uom.gr/esp/programma-eksetastikhs",
    },
  ],
  [
    // Τμήμα Εφαρμοσμένης πληροφορικής
    DEPARTMENTS[3],
    {
      semester:
        "https://www.uom.gr/dai/programmata-didaskalias",
      exam: " https://www.uom.gr/dai/programma-eksetaseon",
    },
  ],
  [
    // Τμήμα Λογιστικής και Χρηματοοικονομικής
    DEPARTMENTS[4],
    {
      semester:
        "https://www.uom.gr/fin/orologio-programma",
      exam: " https://www.uom.gr/fin/eksetaseis",
    },
  ],
  [
    // Τμήμα Μουσικής Επιστήμης & Τέχνης
    DEPARTMENTS[5],
    {
      semester:
        "https://www.uom.gr/msa/orologio-programma",
      exam: " https://www.uom.gr/msa/programma-eksetaseon",
    },
  ],
  [
    // Τμήμα Οικονομικών Επιστημών
    DEPARTMENTS[6],
    {
      semester:
        "https://www.uom.gr/eco/orologia-programmata-mathhmaton",
      exam: " https://www.uom.gr/eco/programmata-eksetaseon",
    },
  ],
  [
    // Τμήμα Οργάνωσης & Διοίκησης Επιχειρήσεων
      //Αυτό χρειάζεται αλλαγή σε κάθε εξάμηνο λόγω γραμματείας
    DEPARTMENTS[7],
    {
      semester:
        "https://www.uom.gr/ba/orologio-programma-didaskalias-earinoy-eksamhnoy-akad-etoys-2022-2023",
      exam: "https://www.uom.gr/ba/programma-eksetaseon-septembrioy-akad-etoys-2022-2023",
    },
  ],
]);