{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 1,
   "id": "32d45556",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "15\n"
     ]
    }
   ],
   "source": [
    "def add(x, y):\n",
    "  return x + y\n",
    "\n",
    "def subtract(x, y):\n",
    "  return x - y\n",
    "\n",
    "def multiply(x, y):\n",
    "  return x * y\n",
    "\n",
    "def divide(x, y):\n",
    "  if y == 0:\n",
    "    return \"Cannot divide by zero\"\n",
    "  else:\n",
    "    return x / y\n",
    "def calculate(operation, num1, num2):\n",
    "  if operation == \"add\":\n",
    "    result = add(num1, num2)\n",
    "  elif operation == \"subtract\":\n",
    "    result = subtract(num1, num2)\n",
    "  elif operation == \"multiply\":\n",
    "    result = multiply(num1, num2)\n",
    "  elif operation == \"divide\":\n",
    "    result = divide(num1, num2)\n",
    "  else:\n",
    "    return \"Invalid operation\"\n",
    "  return result\n",
    "\n",
    "# Example usage:\n",
    "result = calculate(\"add\", 10, 5)\n",
    "print(result)  # Output: 15\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "5a7cf6ee",
   "metadata": {},
   "outputs": [],
   "source": []
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
