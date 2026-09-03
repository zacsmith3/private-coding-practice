#!/usr/bin/env bash
set -e
ZIG_VERSION="0.13.0"
curl -L "https://ziglang.org/download/${ZIG_VERSION}/zig-linux-x86_64-${ZIG_VERSION}.tar.xz" -o /tmp/zig.tar.xz
sudo mkdir -p /usr/local/zig
sudo tar -xf /tmp/zig.tar.xz -C /usr/local/zig --strip-components=1
echo 'export PATH="/usr/local/zig:$PATH"' >> ~/.bashrc
sudo ln -sf /usr/local/zig/zig /usr/local/bin/zig