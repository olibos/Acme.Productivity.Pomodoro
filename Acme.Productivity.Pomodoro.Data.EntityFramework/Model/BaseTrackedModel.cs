// <copyright file="BaseTrackedModel.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework.Model
{
    using System;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;

    /// <summary>
    /// Base properties for all tracked models.
    /// </summary>
    public abstract class BaseTrackedModel
    {
        /// <summary>
        /// Gets or sets the CreatedBy.
        /// </summary>
        /// <value>The CreatedBy.</value>
        [Required]
        public string CreatedBy { get; set; }

        /// <summary>
        /// Gets or sets the CreationDate.
        /// </summary>
        /// <value>The CreationDate.</value>
        [Required]
        public DateTime CreationDate { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this row is deleted.
        /// </summary>
        [Required]
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }

        /// <summary>
        /// Gets or sets the UpdateDate.
        /// </summary>
        /// <value>The UpdateDate.</value>
        [Required]
        public DateTime UpdateDate { get; set; }

        /// <summary>
        /// Gets or sets the UpdatedBy.
        /// </summary>
        /// <value>The UpdatedBy.</value>
        [Required]
        public string UpdatedBy { get; set; }
    }
}