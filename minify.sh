#!/bin/sh

sed '/\/\*\*/d; / \*/d; s/  /\t/g' elite.js > elite.min.js
