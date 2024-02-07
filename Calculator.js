{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "2537c752",
   "metadata": {},
   "outputs": [],
   "source": [
    "// components/Calculator.js\n",
    "import React, { useState } from 'react';\n",
    "\n",
    "function Calculator() {\n",
    "  const [num1, setNum1] = useState('');\n",
    "  const [num2, setNum2] = useState('');\n",
    "  const [operation, setOperation] = useState('');\n",
    "  const [result, setResult] = useState('');\n",
    "\n",
    "  // ... handle input changes and calculation\n",
    "}\n",
    "// components/Calculator.js\n",
    "// ...\n",
    "\n",
    "const handleCalculate = async () => {\n",
    "  try {\n",
    "    const response = await fetch('/api/calculator', {\n",
    "      method: 'POST',\n",
    "      body: JSON.stringify({ num1, num2, operation }),\n",
    "    });\n",
    "    const data = await response.json();\n",
    "    setResult(data.result);\n",
    "  } catch (error) {\n",
    "    console.error(error);\n",
    "    // Handle error in UI\n",
    "  }\n",
    "};\n"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.11.5"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
