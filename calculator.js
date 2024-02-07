{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "b42dabc7",
   "metadata": {},
   "outputs": [],
   "source": [
    "// pages/api/calculator.js\n",
    "import nc from 'next-connect';\n",
    "import { calculate } from '../path/to/python/calculator'; // Import Python function\n",
    "\n",
    "const handler = nc();\n",
    "\n",
    "handler.post(async (req, res) => {\n",
    "  const { num1, num2, operation } = req.body;\n",
    "  try {\n",
    "    const result = await calculate(operation, num1, num2);\n",
    "    res.json({ result });\n",
    "  } catch (error) {\n",
    "    res.status(500).json({ error: error.message });\n",
    "  }\n",
    "});\n",
    "\n",
    "export default handler;\n"
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
