# SubRENM

Filename replacement with padding based on iteration.

## Table of Contents

- [Concept](#Concept)
- [Documentation](#Documentation)

----

# Concept

Think there are a lot of subtitles that need to change its filename because it isn't the same as the filename of the video.
Renaming the files will take a few minutes but it will be long enough to feel lazy.
To resolve this issues, I made a simple script which automates the renaming of the filename.

This script replaces the filename with automated padding.
For instance, see following list of the files.

```
sample video 1.srt
sample video 2.srt
...
sample video 24.srt
```

By using this script, we can easily change the filename just like following result.

```
Sample video - 01.eng.srt
Sample video - 02.eng.srt
...
Sample video - 03.eng.srt
```

# Documentation

To install this script to your system, use following command.

```sh
npm i -g Seia-Soto/SubRENM
```

To use this script, just type `subren` to your console.

The script will ask you two question to figure out the filename: `templateString` and `extension`.

| Variation | Description |
| :------------- | :------------- |
| templateString | The template string for the modified file name. The variable that represents the iteration with automated padding is `{iter}`. |
| extension | The extension of file(s) to change the name. |

## Concept-case description

To make sure, I'll provide deeper description of concept-case.

| Variation | Value |
| :------------- | :------------- |
| templateString | Sample video - {iter}.eng.srt |
| extension | .srt |
