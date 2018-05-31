"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ql2_1 = require("../proto/ql2");
exports.bracket = [ql2_1.Term.TermType.BRACKET, '', 1, 1, false];
exports.funcall = [ql2_1.Term.TermType.FUNCALL, 'do', 1, -1, false];
exports.termConfig = [
    [ql2_1.Term.TermType.UUID, 'uuid', 1, 1, false],
    [ql2_1.Term.TermType.HTTP, 'http', 1, 1, true],
    [ql2_1.Term.TermType.TABLE, 'table', 1, 1, true],
    [ql2_1.Term.TermType.GET, 'get', 1, 1, false],
    [ql2_1.Term.TermType.GET_ALL, 'getAll', 1, -1, true],
    [ql2_1.Term.TermType.EQ, 'eq', 1, -1, false],
    [ql2_1.Term.TermType.NE, 'ne', 1, -1, false],
    [ql2_1.Term.TermType.LT, 'lt', 1, -1, false],
    [ql2_1.Term.TermType.LE, 'le', 1, -1, false],
    [ql2_1.Term.TermType.GT, 'gt', 1, -1, false],
    [ql2_1.Term.TermType.GE, 'ge', 1, -1, false],
    [ql2_1.Term.TermType.NOT, 'not', 0, 0, false],
    [ql2_1.Term.TermType.ADD, 'add', 1, -1, false],
    [ql2_1.Term.TermType.SUB, 'sub', 1, -1, false],
    [ql2_1.Term.TermType.MUL, 'mul', 1, -1, false],
    [ql2_1.Term.TermType.DIV, 'div', 1, -1, false],
    [ql2_1.Term.TermType.MOD, 'mod', 1, -1, false],
    [ql2_1.Term.TermType.FLOOR, 'floor', 0, 0, false],
    [ql2_1.Term.TermType.CEIL, 'ceil', 0, 0, false],
    [ql2_1.Term.TermType.ROUND, 'round', 0, -1, false],
    [ql2_1.Term.TermType.APPEND, 'append', 0, 1, false],
    [ql2_1.Term.TermType.PREPEND, 'prepend', 0, 1, false],
    [ql2_1.Term.TermType.DIFFERENCE, 'difference', 1, 1, false],
    [ql2_1.Term.TermType.SET_INSERT, 'setInsert', 1, 1, false],
    [ql2_1.Term.TermType.SET_INTERSECTION, 'setIntersection', 1, 1, false],
    [ql2_1.Term.TermType.SET_UNION, 'setUnion', 1, 1, false],
    [ql2_1.Term.TermType.SET_DIFFERENCE, 'setDifference', 1, 1, false],
    [ql2_1.Term.TermType.SLICE, 'slice', 1, 2, true],
    [ql2_1.Term.TermType.SKIP, 'skip', 1, 1, false],
    [ql2_1.Term.TermType.LIMIT, 'limit', 1, 1, false],
    [ql2_1.Term.TermType.OFFSETS_OF, 'offsetsOf', 1, 1, false],
    [ql2_1.Term.TermType.CONTAINS, 'contains', 1, -1, false],
    [ql2_1.Term.TermType.GET_FIELD, 'getField', 1, 1, false],
    [ql2_1.Term.TermType.KEYS, 'keys', 0, 0, false],
    [ql2_1.Term.TermType.VALUES, 'values', 0, 0, false],
    [ql2_1.Term.TermType.HAS_FIELDS, 'hasFields', 1, -1, false],
    [ql2_1.Term.TermType.WITH_FIELDS, 'withFields', 1, -1, false],
    [ql2_1.Term.TermType.PLUCK, 'pluck', 1, -1, false],
    [ql2_1.Term.TermType.WITHOUT, 'without', 1, -1, false],
    [ql2_1.Term.TermType.MERGE, 'merge', 1, -1, false],
    [ql2_1.Term.TermType.BETWEEN, 'between', 2, 2, true],
    [ql2_1.Term.TermType.REDUCE, 'reduce', 1, 1, false],
    [ql2_1.Term.TermType.MAP, 'map', 1, -1, false],
    [ql2_1.Term.TermType.FOLD, 'fold', 2, 2, true],
    [ql2_1.Term.TermType.FILTER, 'filter', 1, 1, true],
    [ql2_1.Term.TermType.CONCAT_MAP, 'concatMap', 1, -1, false],
    [ql2_1.Term.TermType.ORDER_BY, 'orderBy', 0, -1, true],
    [ql2_1.Term.TermType.DISTINCT, 'distinct', 0, 0, true],
    [ql2_1.Term.TermType.COUNT, 'count', 0, 1, false],
    [ql2_1.Term.TermType.IS_EMPTY, 'isEmpty', 0, 0, false],
    [ql2_1.Term.TermType.UNION, 'union', 0, -1, true],
    [ql2_1.Term.TermType.NTH, 'nth', 1, 1, false],
    [ql2_1.Term.TermType.INNER_JOIN, 'innerJoin', 2, 2, false],
    [ql2_1.Term.TermType.OUTER_JOIN, 'outerJoin', 2, 2, false],
    [ql2_1.Term.TermType.EQ_JOIN, 'eqJoin', 2, 2, true],
    [ql2_1.Term.TermType.ZIP, 'zip', 0, 0, false],
    [ql2_1.Term.TermType.RANGE, 'range', 0, 2, false],
    [ql2_1.Term.TermType.INSERT_AT, 'insertAt', 2, 2, false],
    [ql2_1.Term.TermType.DELETE_AT, 'deleteAt', 2, 2, false],
    [ql2_1.Term.TermType.CHANGE_AT, 'changeAt', 2, 2, false],
    [ql2_1.Term.TermType.SPLICE_AT, 'spliceAt', 2, 2, false],
    [ql2_1.Term.TermType.COERCE_TO, 'coerceTo', 1, 1, false],
    [ql2_1.Term.TermType.TYPE_OF, 'typeOf', 0, 0, false],
    [ql2_1.Term.TermType.UPDATE, 'update', 1, 1, true],
    [ql2_1.Term.TermType.DELETE, 'delete', 0, 0, true],
    [ql2_1.Term.TermType.REPLACE, 'replace', 1, 1, true],
    [ql2_1.Term.TermType.INSERT, 'insert', 1, 1, true],
    [ql2_1.Term.TermType.TABLE_CREATE, 'tableCreate', 1, 1, true],
    [ql2_1.Term.TermType.TABLE_DROP, 'tableDrop', 1, 1, false],
    [ql2_1.Term.TermType.TABLE_LIST, 'tableList', 0, 0, false],
    [ql2_1.Term.TermType.CONFIG, 'config', 0, 0, false],
    [ql2_1.Term.TermType.STATUS, 'status', 0, 0, false],
    [ql2_1.Term.TermType.WAIT, 'wait', 0, 0, true],
    [ql2_1.Term.TermType.RECONFIGURE, 'reconfigure', 0, 0, true],
    [ql2_1.Term.TermType.REBALANCE, 'rebalance', 0, 0, false],
    [ql2_1.Term.TermType.SYNC, 'sync', 0, 0, false],
    [ql2_1.Term.TermType.GRANT, 'grant', 2, 2, false],
    [ql2_1.Term.TermType.INDEX_CREATE, 'indexCreate', 1, 2, true],
    [ql2_1.Term.TermType.INDEX_DROP, 'indexDrop', 1, 1, false],
    [ql2_1.Term.TermType.INDEX_LIST, 'indexList', 0, 0, false],
    [ql2_1.Term.TermType.INDEX_STATUS, 'indexStatus', 1, -1, false],
    [ql2_1.Term.TermType.INDEX_WAIT, 'indexWait', 1, -1, false],
    [ql2_1.Term.TermType.INDEX_RENAME, 'indexRename', 2, 2, true],
    [ql2_1.Term.TermType.BRANCH, 'branch', 2, -1, false],
    [ql2_1.Term.TermType.OR, 'or', 1, -1, false],
    [ql2_1.Term.TermType.AND, 'and', 1, -1, false],
    [ql2_1.Term.TermType.FOR_EACH, 'forEach', 1, 1, false],
    [ql2_1.Term.TermType.INFO, 'info', 0, 0, false],
    [ql2_1.Term.TermType.MATCH, 'match', 0, 0, false],
    [ql2_1.Term.TermType.UPCASE, 'upcase', 0, 0, false],
    [ql2_1.Term.TermType.DOWNCASE, 'downcase', 0, 0, false],
    [ql2_1.Term.TermType.SAMPLE, 'sample', 1, 1, false],
    [ql2_1.Term.TermType.DEFAULT, 'default', 1, 1, false],
    [ql2_1.Term.TermType.TO_ISO8601, 'toISO8601', 0, 0, false],
    [ql2_1.Term.TermType.TO_EPOCH_TIME, 'toEpochTime', 0, 0, false],
    [ql2_1.Term.TermType.IN_TIMEZONE, 'inTimezone', 1, 1, false],
    [ql2_1.Term.TermType.DURING, 'during', 2, 2, true],
    [ql2_1.Term.TermType.DATE, 'date', 0, 0, false],
    [ql2_1.Term.TermType.TIME_OF_DAY, 'timeOfDay', 0, 0, false],
    [ql2_1.Term.TermType.TIMEZONE, 'timezone', 0, 0, false],
    [ql2_1.Term.TermType.YEAR, 'year', 0, 0, false],
    [ql2_1.Term.TermType.MONTH, 'month', 0, 0, false],
    [ql2_1.Term.TermType.DAY, 'day', 0, 0, false],
    [ql2_1.Term.TermType.DAY_OF_WEEK, 'dayOfWeek', 0, 0, false],
    [ql2_1.Term.TermType.DAY_OF_YEAR, 'dayOfYear', 0, 0, false],
    [ql2_1.Term.TermType.HOURS, 'hours', 0, 0, false],
    [ql2_1.Term.TermType.MINUTES, 'minutes', 0, 0, false],
    [ql2_1.Term.TermType.SECONDS, 'seconds', 0, 0, false],
    [ql2_1.Term.TermType.GROUP, 'group', 0, -1, true],
    [ql2_1.Term.TermType.SUM, 'sum', 0, 1, false],
    [ql2_1.Term.TermType.AVG, 'avg', 0, 1, false],
    [ql2_1.Term.TermType.MIN, 'min', 0, 1, true],
    [ql2_1.Term.TermType.MAX, 'max', 0, 1, true],
    [ql2_1.Term.TermType.SPLIT, 'split', 1, 2, false],
    [ql2_1.Term.TermType.UNGROUP, 'ungroup', 0, 0, false],
    [ql2_1.Term.TermType.RANDOM, 'random', 0, 2, true],
    [ql2_1.Term.TermType.CHANGES, 'changes', 0, 0, true],
    [ql2_1.Term.TermType.GEOJSON, 'geojson', 1, 1, false],
    [ql2_1.Term.TermType.TO_GEOJSON, 'toGeojson', 0, 0, false],
    [ql2_1.Term.TermType.DISTANCE, 'distance', 2, 2, true],
    [ql2_1.Term.TermType.INTERSECTS, 'intersects', 2, 2, false],
    [ql2_1.Term.TermType.INCLUDES, 'includes', 1, 1, false],
    [ql2_1.Term.TermType.GET_INTERSECTING, 'getIntersecting', 1, 1, true],
    [ql2_1.Term.TermType.FILL, 'fill', 0, 0, false],
    [ql2_1.Term.TermType.GET_NEAREST, 'getNearest', 1, 1, true],
    [ql2_1.Term.TermType.POLYGON_SUB, 'polygonSub', 1, 1, false],
    [ql2_1.Term.TermType.TO_JSON_STRING, 'toJSON', 1, 1, false],
    [ql2_1.Term.TermType.TO_JSON_STRING, 'toJsonString', 1, 1, false]
    // not documented
    // [Term.TermType.SET_WRITE_HOOK, 'setWriteHook', -1, -1, true],
    // [Term.TermType.GET_WRITE_HOOK, 'getWriteHoot', -1, -1, true],
    // [Term.TermType.BIT_AND, 'bitAnd', -1, -1, true],
    // [Term.TermType.BIT_OR, 'bitOr', -1, -1, true],
    // [Term.TermType.BIT_XOR, 'bitXor', -1, -1, true],
    // [Term.TermType.BIT_NOT, 'bitNot', -1, -1, true],
    // [Term.TermType.BIT_SAL, 'bitShiftLeft', -1, -1, true],
    // [Term.TermType.BIT_SAR, 'bitShiftRight', -1, -1, true]
];
exports.rConfig = [
    [ql2_1.Term.TermType.DB, 'db', 1, 1, false],
    [ql2_1.Term.TermType.DB_CREATE, 'dbCreate', 1, 1, false],
    [ql2_1.Term.TermType.DB_DROP, 'dbDrop', 1, 1, false],
    [ql2_1.Term.TermType.DB_LIST, 'dbList', 0, 0, false],
    [ql2_1.Term.TermType.TABLE, 'table', 1, 1, true],
    [ql2_1.Term.TermType.TABLE_CREATE, 'tableCreate', 1, 1, true],
    [ql2_1.Term.TermType.TABLE_DROP, 'tableDrop', 1, 1, false],
    [ql2_1.Term.TermType.TABLE_LIST, 'tableList', 0, 0, false],
    [ql2_1.Term.TermType.ASC, 'asc', 1, 1, false],
    [ql2_1.Term.TermType.DESC, 'desc', 1, 1, false],
    [ql2_1.Term.TermType.EPOCH_TIME, 'epochTime', 1, 1, false],
    [ql2_1.Term.TermType.NOW, 'now', 0, 0, false],
    [ql2_1.Term.TermType.BINARY, 'binary', 1, 1, false],
    [ql2_1.Term.TermType.ARGS, 'args', 1, 1, false],
    [ql2_1.Term.TermType.TIME, 'time', 4, 7, false],
    [ql2_1.Term.TermType.ISO8601, 'ISO8601', 1, 1, true],
    [ql2_1.Term.TermType.ERROR, 'error', 1, 1, false],
    [ql2_1.Term.TermType.JAVASCRIPT, 'js', 1, 1, true],
    [ql2_1.Term.TermType.JSON, 'json', 1, 1, false],
    [ql2_1.Term.TermType.POINT, 'point', 2, 2, false],
    [ql2_1.Term.TermType.LINE, 'line', 2, -1, false],
    [ql2_1.Term.TermType.POLYGON, 'polygon', 2, -1, false],
    [ql2_1.Term.TermType.CIRCLE, 'circle', 2, 2, true],
    [ql2_1.Term.TermType.LITERAL, 'literal', 0, 1, false],
    [ql2_1.Term.TermType.OBJECT, 'object', 1, -1, false]
];
exports.rConsts = [
    [ql2_1.Term.TermType.MINVAL, 'minval'],
    [ql2_1.Term.TermType.MAXVAL, 'maxval'],
    [ql2_1.Term.TermType.MONDAY, 'monday'],
    [ql2_1.Term.TermType.TUESDAY, 'tuesday'],
    [ql2_1.Term.TermType.WEDNESDAY, 'wednesday'],
    [ql2_1.Term.TermType.THURSDAY, 'thursday'],
    [ql2_1.Term.TermType.FRIDAY, 'friday'],
    [ql2_1.Term.TermType.SATURDAY, 'saturday'],
    [ql2_1.Term.TermType.SUNDAY, 'sunday'],
    [ql2_1.Term.TermType.JANUARY, 'january'],
    [ql2_1.Term.TermType.FEBRUARY, 'february'],
    [ql2_1.Term.TermType.MARCH, 'march'],
    [ql2_1.Term.TermType.APRIL, 'april'],
    [ql2_1.Term.TermType.MAY, 'may'],
    [ql2_1.Term.TermType.JUNE, 'june'],
    [ql2_1.Term.TermType.JULY, 'july'],
    [ql2_1.Term.TermType.AUGUST, 'august'],
    [ql2_1.Term.TermType.SEPTEMBER, 'september'],
    [ql2_1.Term.TermType.OCTOBER, 'october'],
    [ql2_1.Term.TermType.NOVEMBER, 'november'],
    [ql2_1.Term.TermType.DECEMBER, 'december']
];