// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package datawidgets.proxies;

public enum Filter_Operators
{
	contains(new java.lang.String[][] { new java.lang.String[] { "en_US", "Contains" } }),
	startsWith(new java.lang.String[][] { new java.lang.String[] { "en_US", "Starts with" } }),
	endsWith(new java.lang.String[][] { new java.lang.String[] { "en_US", "Ends with" } }),
	between(new java.lang.String[][] { new java.lang.String[] { "en_US", "Between" } }),
	greater(new java.lang.String[][] { new java.lang.String[] { "en_US", "Greater than" } }),
	greaterEqual(new java.lang.String[][] { new java.lang.String[] { "en_US", "Greater than or equal" } }),
	equal(new java.lang.String[][] { new java.lang.String[] { "en_US", "Equal" } }),
	notEqual(new java.lang.String[][] { new java.lang.String[] { "en_US", "Not equal" } }),
	smaller(new java.lang.String[][] { new java.lang.String[] { "en_US", "Smaller than" } }),
	smallerEqual(new java.lang.String[][] { new java.lang.String[] { "en_US", "Smaller than or equal" } }),
	empty(new java.lang.String[][] { new java.lang.String[] { "en_US", "Empty" } }),
	notEmpty(new java.lang.String[][] { new java.lang.String[] { "en_US", "Not empty" } });

	private final java.util.Map<java.lang.String, java.lang.String> captions;

	private Filter_Operators(java.lang.String[][] captionStrings)
	{
		this.captions = new java.util.HashMap<>();
		for (java.lang.String[] captionString : captionStrings) {
			captions.put(captionString[0], captionString[1]);
		}
	}

	public java.lang.String getCaption(java.lang.String languageCode)
	{
		return captions.getOrDefault(languageCode, "en_US");
	}

	public java.lang.String getCaption()
	{
		return captions.get("en_US");
	}
}