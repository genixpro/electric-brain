/*
 Electric Brain is an easy to use platform for machine learning.
 Copyright (C) 2016 Electric Brain Software Corporation

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const EBCSVPlugin = require('./server/EBCSVPlugin');

/*
 * Plugins must define some configuration
 */
module.exports = {
    "name": "csv",
    "folder": __dirname,
    "dataSources": {
        'csv': EBCSVPlugin
    },
    "interpretations": {},
    "pythonComponents": {},
    "architecturePlugins": {}
};

