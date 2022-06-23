defsynonym_queries(synonym_words, queries):'''
    synonym_words: iterable of pairs of strings representing synonymous words
    queries: iterable of pairs of strings representing queries to be tested for 
             synonymous-ness
    '''
    output = []
    for q1, q2 in queries:
        q1, q2 = q1.split(), q2.split()
        if len(q1) != len(q2):
            output.append(False)
            continue
        result = Truefor i in range(len(q1)):
            w1, w2 = q1[i], q2[i]
            if w1 == w2:
                continueelif words_are_synonyms(w1, w2):
                continue
            result = Falsebreak
        output.append(result)
    return output