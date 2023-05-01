#!/bin/bash

set -eux
set -o pipefail

time node -v
time npm -v
time yarn -v
time yarn
time yarn dev

echo "done :)"
exit 1